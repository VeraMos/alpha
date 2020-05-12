$(document).ready(function () {


   //  $('.main-slider__list').slick({
   //      prevArrow: '<button class="prev-left"></button>',
   //      nextArrow: '<button class="prev-right"></button>',
   //      dots: true
   //  });


   $('.projects-slider').slick({
   		slidesToShow: 2,
  	 	slidesToScroll: 1,
      prevArrow: '<button class="prev-left"></button>',
      nextArrow: '<button class="prev-right"></button>',
      responsive: [
    	{
	    breakpoint: 576,
	    settings: {
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    	}
   	  }
  	]

     });


  });