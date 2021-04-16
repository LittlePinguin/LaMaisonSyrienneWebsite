$(document).ready(function(){
    //$(this).scrollTop(0);

    function detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }



    if(!detectMob()){
        console.log("here");
        $("body").css({
            "min-width":"717px"
        });

    }else{
        $('.column > p > a').css({
            "font-size" : "2.2em"
        });
    }


    var size = $(window).width();


    //
    // $('h1').css({
    //     "font-size":"40px"
    // });

    // $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    //     $(this).addClass('active');
    // })

    $('.nav-link').removeClass('active');
    $('.nav-link').on('click', function(){
        $('.nav-link').each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });

    $('.navbar-toggler').focus(function(){
        $('.nav-tabs').removeClass("tab-btm");
        $('.nav-tabs').css({
            "display":"block"
        });
    });

    $('.navbar-toggler').focusout(function(){
        $('.nav-tabs').addClass("tab-btm");
        $('.nav-tabs').css({
            "display":"none"
        });
    });


    $('.menu .item').not('.assiettes').hide();

    $('.control .btn').click(function (){
       $(this).addClass('btn-active').siblings().removeClass('btn-active');

       let filter = $(this).attr('data-filter');
       $('.menu .item').not('.'+filter).fadeOut(200);
       $('.menu .item').filter('.'+filter).fadeIn(400);
    });

    //onResize
    $(window).resize(function(){
        w_w = $(window).width();
        if(w_w > 991){
            $(".nav-tabs").css({
                "display":"flex"
            });
        }
        if(w_w < 992){
            $(".nav-tabs").css({
                "display":"none"
            });
        }
    });
});
