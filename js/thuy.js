$(document).ready(function () {
    $('.p-slider').owlCarousel({
        loop:true,
        margin: 30,
        items:1,
        autoplay:true,
        nav:true,
        navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
        dots:false,
        autoplayHoverPause: true,
        autoplaySpeed: 700,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            767:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:4
            },
        }
    });
});