$( document ).ready(function() {
    console.log( "ready!" );
  // Hamburger Icon Event
  $('.navbar-toggler-icon').click(function(){
    $('nav').toggleClass("navbar-click");
    $('.navbar-brand-hide').toggle();

  });

  // Scroll Event
  $(window).on('scroll', function() {
      var scrollPosition = $(this).scrollTop();
      if (scrollPosition >= 715) {
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
