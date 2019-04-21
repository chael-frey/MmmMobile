$(function(){
    var  productdetails=new productDetails();
    productdetails.queryDetails();
})
var productDetails=function(){
   
}
productDetails.prototype={
    queryDetails:function(){
       var productid=getUrlParams("productid");
        $.ajax({
            url:"http://47.52.242.30:9090/api/getproduct",
            dataType:"json",
            data:{
                productid :productid 
            },
            success:function(obj){
                var html=template("detailTpl",obj);
                $.ajax({
                    url:"http://47.52.242.30:9090/api/getproductcom",
                    dataType:"json",
                data:{
                    productid :productid 
                },
                success:function(obj){
                    html+=template("evaluateTpl",obj);
                    $("#main").html(html)
                }
                })
            }
        })
    }
};
