
$(function(){
    queryDiscount();
})
function queryDiscount(){
    var productid=getUrlParams("productid")
    $.ajax({
        url:"http://47.52.242.30:9090/api/getdiscountproduct",
        dataType:"json",
        data:{
            productid:productid
        },
        success:function(obj){
            console.log(obj);
            var html=template("savaTpl",obj);
            $("#main").html(html)
        }
    })
}
