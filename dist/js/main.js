$( document ).ready(function() {
    console.log( "ready!" );

  $('.navbar-toggler-icon').click(function(){
    $('nav').toggleClass("navbar-click");
    $('.navbar-brand-hide').toggle();

  });

  $(window).on('scroll', function() {
      var scrollPosition = $(this).scrollTop();
      if (scrollPosition >= 715) {
          // If the function is only supposed to fire once
          $('nav').addClass("fixed-top");

          $('#left').removeClass("vert-2");
          $('#left').addClass("vert-2-after");

          $('#right').removeClass("vert-1");
          $('#right').addClass("vert-1-after");
      } else{
        $('nav').removeClass("fixed-top");
      }
  });

});
