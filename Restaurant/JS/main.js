$(document).ready(function(){
    $(this).scrollTop(0);

    var size = $(window).width();

    $('h1').css({
        "font-size":"40px"
    });

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
