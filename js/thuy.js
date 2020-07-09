$(document).ready(function () {
    //noi that do roi
    $('.p-slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        autoplay: true,
        nav: true,
        navText: [
            '<i class="ti-angle-left"></i>', 
            '<i class="ti-angle-right"></i>'
        ],
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 700,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1.2,
                nav: false,
                margin: 10,
                center: true,
                autoplay: false,
                loop: false,
            },
            600: {
                items: 3,
                nav: false,
                center:true,
                margin: 10,
            },
            992: {
                items: 3,
                nav: false,
                center:true,
            },
            1200: {
                items: 4
            },
        }
    });

    $('.owl-img-category').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        autoplay: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 700,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            767: {
                items: 1,
                nav: false,
                center:true,
            },
            992: {
                items: 1,
                nav: false,
                center:true,
            },
            1200: {
                items: 1
            },
        }
    });

    $('.btn-cart').hover(function () {
            $(this).children('img').attr("src","./images/shopping-cart(1).svg");
        }, function () {
            $(this).children('img').attr("src","./images/shopping-cart.svg");
        }
    );
});