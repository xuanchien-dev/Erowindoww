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
                items: 1.4,
                nav: false,
                margin: 10,
                center: true,
                autoplay: false,
                loop: true,
            },
            600: {
                items: 3,
                nav: false,
                center: true,
                margin: 10,
            },
            992: {
                items: 3,
                nav: false,
                center: true,
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
                items: 1.4,
                nav: false,
                 loop: true,
            },
            767: {
                items: 1,
                nav: false,
                center: true,
            },
            992: {
                items: 1,
                nav: false,
                center: true,
            },
            1200: {
                items: 1
            },
        }
    });

    $('.btn-cart').hover(function () {
        $(this).children('img').attr("src", "/themes/introduce/w3ni877/images/shopping-cart(1).svg");
    }, function () {
        $(this).children('img').attr("src", "/themes/introduce/w3ni877/images/shopping-cart.svg");
    });

    $('.btn-o-crit').on('click', function (e) {
        e.preventDefault();
        $('div.order-criterias').toggleClass('open-crite');
    });

    //chi tiet noi that
    var sync1 = $("#carousel-1");
    var sync2 = $("#carousel-2");
    var slidesPerPage = 5; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoHeight: true,
        autoplayTimeout: 2000,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        responsive: {
            600: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            1000: {
                items: 1,
                loop: true,
            }
        },
        onChanged: syncPosition,
    });

    sync2.owlCarousel({
        responsive: {
             0: {
                items: 3,
                margin: 5,
                loop: true,
            },
            600: {
                items: 3,
                margin: 5,
                loop: true,
            },
            1000: {
                items: 4,
                margin: 20,
                loop: true,
            }
        },
        dots: false,
        nav: false,
        margin: 30,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate: 100,
        onInitialized: function () {
            sync2.find(".owl-item").eq(0).addClass("synced");
        },
        onChanged: syncPosition2
    });

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //end block

        sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced");
        sync2.trigger('to.owl.carousel', [current, 100, true]);
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.trigger('to.owl.carousel', [number, 100, true]);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.trigger('to.owl.carousel', [number, 100, true]);
    });


});