$(document).ready(function(){
    window.scrollTo(0, 0);

    // navigation button transformation
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');        
    });

    // menu onglets handler
    $('.control .btn').click(function (){
       $(this).addClass('btn-active').siblings().removeClass('btn-active');
       
       let filter = $(this).attr('data-filter');
       $('.menu .item').not('.'+filter).hide(200);
       $('.menu .item').filter('.'+filter).show(400);
    });
    

    // scroll spy
    // $(window).on('scroll load', function(){
    //     $('section').each(function(){
    //         let top = $(window).scrollTop();
    //         let offset = $(this).offset().top-200;
    //         let height = $(this).height();
    //         let id = $(this).attr('id');

    //         if(top>offset && top<offset+height){
    //             $('.navbar ul li a').removeClass('active');
    //             $('.navbar').find(`["href="#${id}"]`).addClass('active');
    //         }
    //     });
    // });
});

// // menu tabs handler
// const menuTabs = document.querySelector(".menu-tabs");
// menuTabs.addEventListener("click", function(e){
//     if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
//         const target = e.target.getAttribute("data-target");
//         menuTabs.querySelector(".active").classList.remove("active");
//         e.target.classList.add("active");
//         const menuSection = document.querySelector(".menu");
//         menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
//         menuSection.querySelector(target).classList.add("active");
//     }
// });