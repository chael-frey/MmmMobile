$(function(){
    var category=new Category();
    category.queryTit();
    category.queryCategory();
    
})
var Category=function(){

}
Category.prototype={
    queryTit:function(){
        $.ajax({
            url:"http://47.52.242.30:9090/api/getcategorytitle",
            dataType:"json",
            success:function(obj){
                var html=template("categoryTitTpl",obj);
                $(".mui-table-view").html(html);
            }
        })
    },
    queryCategory:function(){
        $(".mui-table-view").on("tap",".mui-navigate-right",function(){
            var that=this;
            var id=$(this).data("id");
            console.log(id);
            $.ajax({
                url:"http://47.52.242.30:9090/api/getcategory",
                dataType:"json",
                data:{
                    titleid:id
                },
                success:function(obj){
                    var html=template("categoryTpl",obj);
                    $(that).parent().find(".mui-row").html(html);
                }
            })
        })
    }
}