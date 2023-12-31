 
// sticky menu

jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 25) {
        jQuery('.header').addClass('fixed-top');
    } else {
        jQuery('.header').removeClass('fixed-top');
    }
});


// caousel
jQuery('#rev_carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    autoPlay: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});



//wow js

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
