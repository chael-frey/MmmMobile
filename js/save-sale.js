
$(function(){
   
    querySave()
    
})
function querySave(){
    var productid=getUrlParams("productid")
    $.ajax({
        url:"http://47.52.242.30:9090/api/getmoneyctrlproduct",
        dataType:"json",
        data:{
            productid:productid
        },
        success:function(obj){
            console.log(obj);
            var html=template("savaTpl",obj);
            $("#main").html(html);
        }
    })
}
