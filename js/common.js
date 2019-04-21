$(function(){
    var common=new Common();
    common.InitMui();
    common.toTop();
})
var Common=function(){
}
Common.prototype={
    InitMui:function(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        mui("#slider").slider({
            interval: 3000
        });
    },
    toTop:function (){
        $("#btn-top").on("tap",function(){
            mui('.mui-scroll-wrapper.all').scroll().scrollTo(0,0,1500);
        })
    }
};
function changePage(callback,maxPage,minPage){
    $("#main").on("click",".select",function(e){
        $(".select .optionBox").show();
        $(".select .optionBox").on("click",".option",function(e){
            $(".select>span").text($(this).text());
            $(".select .optionBox").hide();
            pageid=$(this).data("value");
            callback();
            return false;
        })
    });
    $("#main").on("click","#previous",function(){
        pageid--;
        if(pageid<minPage) return;
        callback();
    });
    $("#main").on("click","#next",function(){
        pageid++;
        if(pageid>maxPage) return;
        callback();
    });
};
function getUrlParams(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式 
    var r = window.location.search.substr(1).match(reg);  
    if (r != null) return decodeURI(r[2]);
  return null; 
};
