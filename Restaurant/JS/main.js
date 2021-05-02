$(document).ready(function(){

    $(function() {
        AOS.init({
            delay: 100,
            duration: 1000
        });
    });

    // function detectMob() {
    //     const toMatch = [
    //         /Android/i,
    //         /webOS/i,
    //         /iPhone/i,
    //         /iPad/i,
    //         /iPod/i,
    //         /BlackBerry/i,
    //         /Windows Phone/i
    //     ];
    //
    //     return toMatch.some((toMatchItem) => {
    //         return navigator.userAgent.match(toMatchItem);
    //     });
    // }
    //
    //
    // if(!detectMob()){
    //     $('.popular-container').removeClass("hidden");
    // }else{
    //     $('.carousel-container').removeClass("hidden");
    // }


    //
    // var size = $(window).width();
    //
    // if(size > 991){
    //     $('.popular-container').removeClass("hidden");
    // }else{
    //     $('.carousel-container').removeClass("hidden");
    // }

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

    // menu onglets handler
    $('.menu .item').not('.mezzes').hide();

    $('.control .btn').click(function (){
        var filter = $(this).attr('data-filter');

        $(this).addClass('btn-active').siblings().removeClass('btn-active');

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
        if (w_w < 991){
            // about change transition in phone version
            $('.about-container .img-fluid').attr('data-aos', 'fade-right');

            $('.scroll-btn .scroll-top-icon').on('touchstart', function(){
                $(this).css({
                    "color":"rgb(47, 194, 47)",
                    "background-color": "transparent",
                    "border": "3px solid rgb(47, 194, 47)"
                });
            });
            $('.scroll-btn .scroll-top-icon').on('touchend', function(){
                $(this).css({
                    "color":"white",
                    "background-color": "rgb(47, 194, 47)",
                    "border": "3px solid white"
                });
            });

            $('.nav-tabs li a').on('touchstart', function(){
                $(this).css({
                    "color":"#151f28"
                });
            });
            $('.nav-tabs li a').on('touchend', function(){
                $(this).css({
                    "color":"white"
                });
            });

            $('.sqipple').on('touchstart', function(){
                $(this).css({
                    "border": "1px solid",
                    "outline-color": "#198754",
                    "outline-offset": "0.2em"
                });
            });
            $('.sqipple').on('touchend', function(){
                $(this).css({
                    "border": "0 solid",
                    "outline-offset": "0px",
                    "outline": "1px solid"
                });
            });

            $('.sqipple2').on('touchstart', function(){
                $(this).css({
                    "outline-color": "#d8d8d8"
                });
            });
            $('.sqipple2').on('touchend', function(){
                $(this).css({
                    "outline-color": "#198754"
                });
            });

            $('.shrink').on('touchstart', function(){
                $(this).css({
                    "-webkit-transform": "scale(0.95)",
                    "transform": "scale(0.95)"
                });
            });
            $('.shrink').on('touchend', function(){
                $(this).css({
                    "transition": "all .2s ease-in-out"
                });
            });

            $('.order-container .column .reseaux p i').on('touchstart', function(){
                $(this).css({
                    "color": "rgb(116, 197, 116)"
                });
            });
            $('.order-container .column .reseaux p i').on('touchend', function(){
                $(this).css({
                    "color":"white"
                });
            });

            $('.column .info p a').on('touchstart', function(){
                $(this).css({
                    "text-decoration": "underline"
                });
            });
            $('.column .info p a').on('touchend', function(){
                $(this).css({
                    "text-decoration": "none"
                });
            });
        }
    });

    // scroll to top button
    $(window).on("scroll", function() {
        AOS.refresh();
        var scrollPos = $(window).scrollTop();
        if (scrollPos <= 0) {
            $(".scroll-top-icon").fadeOut();
        } else {
            $(".scroll-top-icon").fadeIn();
        }
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        $(".navbar").css({
            "top":"0"
        });
      } else {
        $(".navbar").css({
            "top":"-200px"
        });
      }
      prevScrollpos = currentScrollPos;
    }
});
