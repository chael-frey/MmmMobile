var pageid=1;
var pageNum=0;
var categoryid=getUrlParams("categoryid");
$(function(){
    var productList=new ProductList();
    productList.queryProductTitle();
    queryProductList();
    changePage(queryProductList,pageNum,1);
});
var ProductList=function(){
};
ProductList.prototype={
    queryProductTitle:function(){
        $.ajax({
            url:"http://47.52.242.30:9090/api/getcategorybyid",
            data:{
                categoryid:categoryid
            },
            dataType:"json",
            success:function(obj){
                $("#filtrate p a").eq(2).text(obj["result"][0].category)
            }
        })
    },
};
function queryProductList(){
    $.ajax({
        url:"http://47.52.242.30:9090/api/getproductlist",
        data:{
            categoryid:categoryid,
            pageid:pageid
        },
        dataType:"json",
        success:function(obj){
            pageNum=Math.ceil(obj.totalCount/obj.pagesize);
            var arr=[];
            for(i=1;i<=pageNum;i++){
                arr.push(i);
            }
            obj.pageid=pageid;
            obj.arr=arr;
            obj.pageNum=pageNum;
            obj.categoryid=categoryid;
            var html=template("productTpl",obj);
            $("#main").html(html);
        }
    })                          
}