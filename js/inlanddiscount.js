$(function(){
    queryInland();
})
function queryInland(){
    $.ajax({
        url:"http://47.52.242.30:9090/api/getinlanddiscount",
        dataType:"json",
        success:function(obj){
            var html=template("productTpl",obj);
            $(".product-list ul").html(html);
        }
    })
};