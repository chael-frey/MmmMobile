var pageid=0;
var pageNum=0;
$(function(){
    changePage(queryMoneyctr,pageNum,0);
    queryMoneyctr();
})
function queryMoneyctr(){
    $.ajax({
        url:"http://47.52.242.30:9090/api/getmoneyctrl",
        dataType:"json",
        data:{
            pageid :pageid 
        },
        success:function(obj){
            pageNum=Math.ceil(obj.totalCount/obj.pagesize);
            var arr=[]
             for(i=0;i<pageNum;i++){
                 arr.push(i);
             }
             obj.arr=arr;
             obj.pageid=pageid;
            var html=template("moneyctrlTpl",obj);
            $("#main").html(html)
            mui('.optionBox').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }
    })
};

