(function ($) {
  "use strict";

  $(document).foundation();

  var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
  $(window).on(mousewheelevt, function(e){
    var evt = window.event || e //equalize event object     
    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

    if(delta > 0) {
      if ($(this).scrollTop() == 0) $('header').removeClass('scroll');
    } else{
      $('header').addClass('scroll');
    }
  });

  $('body').on('touchmove', function(e){
    if ($(this).scrollTop() > 0) {
      $('header').addClass('scroll');
    } else {
      if ($(this).scrollTop() == 0) {
        $('header').removeClass('scroll');
      }
    }
  });
  if ($(window).scrollTop() > 0) {
    $('header').addClass('scroll');
  }

  $('.hamburger a').on('click', function(e){
    $('header').toggleClass('toggled');
    return false;
  });
  var menuY = $('ul.menu').outerHeight();
  $('header').css({'top': - menuY});
  $('ul.menu a').on('click', function(e){
    $('header').removeClass('toggled');
    if (!$('header').hasClass('scroll')) {
      $('header').addClass('scroll');
    }
  });

})(jQuery);