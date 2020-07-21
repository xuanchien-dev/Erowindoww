(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});



/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/

$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
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
          items:1
      },
      992:{
          items:1
      },
      1200:{
          items:1
      },
      1600:{
          items:1
      }
  }
});

$(document).ready(function(){
  $(".change_type").click(function(){
    $(this).toggleClass("fa-fa-eye");
    if($(this).hasClass("fa-fa-eye")){
      $("#password").attr("type",'text');
    }else{
     $("#password").attr("type",'password');
   }

 });               
});             



// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });
// wow js
  new WOW().init();
  // filter items on button click

  //about-pro-active
$('.details_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
// autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
      }
  }
});

});




//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
       
        // prise slider 
        // 
        
        







})(jQuery);	

//------- doi tac js --------//  
/*js slide đôi khách hàng*/
$('.list-product-best-sale3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        infinite:true,
        pauseOnHover:true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        responsive: [
        {
            breakpoint: 1300,
            settings: 
            {
            slidesToShow: 3,
            arrows: false   
                }
            },
         {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            arrows: false

                }
             },
         {
        breakpoint: 475,
        settings: {
            slidesToShow: 2,
            arrows: false   
        }
    }
    ]
    });

$('.box-st-mobile').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        infinite:true,
        pauseOnHover:true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        responsive: [
        {
            breakpoint: 1300,
            settings: 
            {
            slidesToShow: 4,
            arrows: false   
                }
            },
         {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            arrows: false

                }
             },
         {
        breakpoint: 475,
        settings: {
            slidesToShow: 2,
            arrows: false   
        }
    }
    ]
    });
$('.slide-thanh-tuu').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        infinite:true,
        pauseOnHover:true,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: false,
        responsive: [
        {
            breakpoint: 1300,
            settings: 
            {
            slidesToShow: 4,
            arrows: false   
                }
            },
         {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            arrows: false

                }
             },
         {
        breakpoint: 475,
        settings: {
            slidesToShow: 1,
            arrows: false   
        }
    }
    ]
    });
$('.slide-td').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        infinite:true,
        pauseOnHover:true,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: false
    });

   
$('.title-content-da-index').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        infinite:true,
        pauseOnHover:true,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: false
    });

$('.slide-big').slick({
    dots:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover:true,
    autoplay: false,
    fade: false,
    Swipe: true,
    asNavFor: '.slide-big1',
  });
  $('.slide-big1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
     margin:15,
    Swipe: true,
    fade: false,
    asNavFor: '.slide-big',
     responsive: [
        {
            breakpoint: 1300,
            settings: 
            {
            slidesToShow: 4,
            arrows: false   
                }
            },
         {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            arrows: false

                }
             },
         {
        breakpoint: 475,
        settings: {
            slidesToShow: 2,
            arrows: false   
        }
    }
    ]
  });
   
$('.slide-left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        infinite:true,
        pauseOnHover:true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false
    });

$('.slide-right').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        infinite:true,
        pauseOnHover:true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false
    });

// slide đôi dự án tiêu bieu
   
$('.slide-left-datb').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        pauseOnHover:true,
        autoplay: false,
        fade: false,
        asNavFor: '.title-content-da.datb',
    });
    $('.title-content-da.datb').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        fade: false,
        asNavFor: '.slide-left-datb',
    });

   
