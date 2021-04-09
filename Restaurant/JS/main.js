$(document).ready(function(){
    //$(this).scrollTop(0);

    var size = $(window).width();
    //
    // $('h1').css({
    //     "font-size":"40px"
    // });

    $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
        $(this).addClass('active');
    })

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

    $('.control .btn').click(function (){
       $(this).addClass('btn-active').siblings().removeClass('btn-active');

       let filter = $(this).attr('data-filter');
       $('.menu .item').not('.'+filter).hide(200);
       $('.menu .item').filter('.'+filter).show(400);
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
