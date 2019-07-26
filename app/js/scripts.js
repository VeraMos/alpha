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

  setTimeout(
    function(){
      $(".offer__promo").addClass('triggered');
    }, 1500);

  //reviews block
  $('.rev__btn').on('click', function(e) {
    e.preventDefault();
    $(this).parent().parent().parent('.rev__item').toggleClass('active');
    if ($('.rev__item').hasClass('active')) {
      $(this).html('Скрыть отзыв');
    } else {
      $(this).html('Читать отзыв')
    };
  });

  $('.cert__slider').owlCarousel({
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
        768 : {
            items: 3
        },
        1040 : {
            items: 4
        }
      }
  });
  $('.sidebar__slider').owlCarousel({
      nav: false,
      dots: true,
      items: 1,
      autoplay: true,
      autoplayHoverPause: true,
      loop: true
  });
  
  
  //tabs 
  $(".tabs__content-item:not(:first-child)").hide();
  $(".tabs__container div.tabs__content-item.active-tab").show();
  $('ul.tabs__list > li').click(function () {
    if (!($(this).hasClass('active'))) {
      var thisLi = $(this);
      var numLi = thisLi.index();
      thisLi.addClass('active').siblings().removeClass('active');
      thisLi.parent().next().children('div').removeClass('active-tab').hide().eq(numLi).addClass('active-tab').fadeIn('slow');
    }
  });

  //Программы
  $('.prog__item-info').hide();
  $('.prog__item-more').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active').parents('.prog__in').children('.prog__item-info').slideToggle();
  })
  $('.prog__item-info-close').on('click', function(e){
    e.preventDefault();
    $(this).parents('.prog__item-info').slideToggle();
  })
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

    $('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.banner__nav-wrapper').toggleClass('banner__nav-wrapper--active');
  $('.header__menu-item').toggleClass('header__menu-item--active');
  $('.banner__nav').toggleClass('banner__nav--active');
});

});