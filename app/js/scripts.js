$(function() {
	$('.team__slider').owlCarousel({
      nav: true,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      margin: 20,
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 4
        }
      }
	});
  $('.views-gallery__slider').owlCarousel({
      nav: false,
      dots: false,
      loop: true,
      center: true,
      autoplay: true,
      autoplayHoverPause: true,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      margin: 20,
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 2
        },
        480 : {
            items: 3
        },
        768 : {
            items: 4
        },
        1040 : {
            items: 6
        }
      }
  });
  $('.part__slider').owlCarousel({
      nav: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      margin: 20,
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 2
        },
        480 : {
            items: 3
        },
        768 : {
            items: 5
        },
        1040 : {
            items: 7
        }
      }
  });
  //offer-promo animation
  // $(window).load(function(){
  //   function offerPromo(){
  //     $(".offer__promo").addClass('triggered');
  //   };
  //   window.setTimeout( offerPromo, 5000 ); // 5 seconds
  // });

  setTimeout(
    function(){
      $(".offer__promo").addClass('triggered');
    }, 1500);
  
  // tabs 
  // $(document).ready(function () {
  //   $(".tabs-content__item:not(:first-child)").hide();
  //   $(".tabs__container div.tabs__content-item.active-tab").show();
  //   $('ul.tabs__list > li').click(function () {
  //     if (!($(this).hasClass('active'))) {
  //       var thisLi = $(this);
  //       var numLi = thisLi.index();
  //       thisLi.addClass('active').siblings().removeClass('active');
  //       thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
  //     }
  //   });
  // });
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
  //mobile menu
  // if ( $(window).width() < 992 ) {
  //   $(".nav__hamburger").on('click',function() {
  //     $(this).toggleClass("active");
  //     $('.nav__menu').toggleClass('active');
  //     $('body').toggleClass("fixed");
  //   });
  // }
});