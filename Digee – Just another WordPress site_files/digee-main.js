(function ($) {
"use strict";

// window-load
$(window).on('load', function () {
    $("#loading").fadeOut(500);
})

// meanmenu
$('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
    meanMenuOpen:"<span></span><span></span><span></span>",
});


// sticky-header
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
        $("#header-sticky").removeClass("sticky-menu");
    } else {
        $("#header-sticky").addClass("sticky-menu");
    }
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
    type: 'iframe'
});


$('.js-tilt').tilt();

// counterUp
$('.count').counterUp({
    delay: 10,
    time: 2000
});


// brand-active
$('.brand-logo-default').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// Pricing Table
$(".pricing-box").hover(function(){
    var cur = $(this);
    $(".pricing-box").removeClass("active");
    cur.addClass("active");
    return true;
});


// isotop
$('.project-active,.blog-masonary').imagesLoaded( function() {
    // init Isotope
    var $grid = $('.project-active,.blog-masonary').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      fitRows: {
        gutter: 1
      },

    });
    $('.portfolio-menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
});

// scrollToTop
$.scrollUp({
    scrollName: 'scrollUp',
    topDistance: '300',
    topSpeed: 300,
    animation: 'fade',
    animationInSpeed: 200,
    animationOutSpeed: 200,
    scrollText: '<i class="fa fa-level-up"></i>',
    activeOverlay: false,
});

// WOW active
new WOW().init();

})(jQuery);