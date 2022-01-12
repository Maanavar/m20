
jquery(document).ready(function ($) {
    // if ($(window).width() > 991){
    // $('.navbar-light .d-menu').hover(function () {
    //         $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    //     }, function () {
    //         $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
    //     });
    //     }

    //     $('.navbar-toggler').on('click', function(){
    //         $('.navbar').toggleClass("active");
    //       });

    // (function () {
    //     "use strict";
    //     document
    //     .querySelector('[data-toggle="offcanvas"]')
    //     .addEventListener("click", function () {
    //     document.querySelector(".offcanvas-collapse").classList.toggle("open");
    //     });
    //     })();
    
    // //  menu navbar toggle
    // $('.navbar-toggler').on('click', function () {
    //     $(this).toggleClass('change')
    // });
    $('.navbar-toggler').click(function(){
        $('.offcanvas-collapse').toggle('open');
    });
    });




 