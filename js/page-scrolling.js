$(function() {
      $('.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
		  if(jQuery(window).width() > 1279) {
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top -88
        }, 1500, 'easeInOutExpo');
			  } else {
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top +2
        }, 1500, 'easeInOutExpo');
    }
        event.preventDefault();
      });
    });

jQuery(document).ready(function( $ ){
$(function() {
    //caches a jQuery object containing the header element
    var is_box_visible = true;
    var distance_from_top = $('.sticky-phone').attr('data-scrollTop');

	  $(window).scroll(function() {
	    if (($(window).scrollTop()  > distance_from_top)&&(is_box_visible === true)) {
	      $('.sticky-phone').addClass('sticky-phone--show');
	    } else {
	      $('.sticky-phone').removeClass('sticky-phone--show');
		  
	    }
   
    });
  });
	
});