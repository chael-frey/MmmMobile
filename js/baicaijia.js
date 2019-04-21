let titleid=0;
let page=1;
    changePage();
    queryTit();
    quertContent();
    changeSearch();
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
function queryTit(){
    $.ajax({
        url:"http://47.52.242.30:9090/api/getbaicaijiatitle",
        dataType:"json",
        success:function(obj){
            var html="";
            for(var i=0;i<obj.result.length;i++){
                if(i==0){
                    html+="<a class='nav-tit active' data-id='"+obj.result[i].titleId+"' href='javascript:void(0);'>"+obj.result[i].title+"</a>";
                }else{
                    html+="<a class='nav-tit' data-id='"+obj.result[i].titleId+"' href='javascript:void(0);'>"+obj.result[i].title+"</a>";
                }
            };
           $("#nav .swiper-slide").html(html);
           initSwiper();
        }
    })
};
function initSwiper(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
      });
};
function quertContent(){
    $.ajax({
        url:"http://47.52.242.30:9090/api/getbaicaijiaproduct",
        dataType:"json",
        data:{
            titleid:titleid
        },
        success:function(obj){
            var html=template("baicaijiaTpl",obj);
            $("#main .mui-table-view-chevron").html(html);
           
        }
    })
};
function changeSearch(){
    $(".menu").on("click",function(){
        $(".searchBar").fadeToggle();
    })
};
function changePage(){
    $("#nav").on("click",".swiper-slide a",function(){
        $(this).addClass("active").siblings().removeClass("active");
        var id=$(this).data('id');
        titleid=id;
        quertContent()
    })
};