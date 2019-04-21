$(function(){
    var index=new Index();
    index.queryMenu();
    index.queryList();
});
var Index=function(){

}
Index.prototype={
    queryMenu:function (){
        var that=this;
        $.ajax({
            url:"http://47.52.242.30:9090/api/getindexmenu",
            success:function(obj){
                var html=template("menuTpl",obj);
                $("#menu .mui-row").html(html);
                that.changeMenu();
            }
        })
    },
    queryList:function (){
        $.ajax({
            url:"http://47.52.242.30:9090/api/getmoneyctrl",
            success:function(obj){
                console.log(obj);
                var html=template("productTpl",obj);
                $("#main .mui-table-view").html(html);
            }
        })
    },
    changeMenu:function (){
        $("#menu").on("tap",".btn-change",function(){
            console.log(this);
            $("#menu .menu-hidden").fadeToggle();
        })
    }
}  