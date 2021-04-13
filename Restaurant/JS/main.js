$(document).ready(function(){

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
            "min-width":"990px"
        });

    }else{
        document.getElementById('MyStyle').setAttribute('href', 'css/PhoneSheet.css');
        $('.column > p > a').css({
            "font-size" : "2.2em"
        });
    }


    var size = $(window).width();



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
        if(w_w > 990){
            $(".nav-tabs").css({
                "display":"flex"
            });
        }
    });

    $(window).on("scroll", function() {
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
            "top":"-100px"
        });
      }
      prevScrollpos = currentScrollPos;
    }


});