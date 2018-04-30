(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 40,
  });

  // function to collapse Navbar



    function navbarCollapse() {

      if ($("#mainNav").offset().top > 700) {
        $(".navbar-brand-logo").filter(":not(:animated)").addClass("navbar-logo-shrink");
        $('#mobilecontactlink').filter(":not(:animated)").addClass("showmcl");
        $('#mobilecontactlink').html("Contact Us");
        }
      else if ($("#mainNav").offset().top > 100) {
        $(".navbar-brand-logo").filter(":not(:animated)").addClass("navbar-logo-shrink");
        $('#chevron').fadeOut(1500);
        $('#mobilecontactlink').filter(":not(:animated)").removeClass("showmcl");
      }
        else {
          $(".navbar-brand-logo").filter(":not(:animated)").removeClass("navbar-logo-shrink");
          $('#mobilecontactlink').filter(":not(:animated)").removeClass("showmcl");
          $('#mobilecontactlink').html(" ");
        }
      }



  if ($("#mainNav").offset().top < 100){
    setTimeout(function(){
      $('#chevron').fadeIn(2500); }, 3300);}
    else {
      $('#chevron').fadeOut(2500); }


  // Collapse now if page is not at top

  // Collapse the navbar when page is scrolled
  /*$(window).on('scroll', function(){
    $('.navbar-collapse').collapse('hide');
    navbarCollapse();
  });*/

  $(window).on('scroll', function(){
    $('.navbar-collapse').collapse('hide');
    navbarCollapse();
  });


$(window).ready(() => {
  setTimeout(function(){
    $('#logo-anim').fadeIn(4000); }, 200);
  setTimeout(function(){
    $('#kylefrontpage1').fadeIn(4000); }, 1000);
  setTimeout(function(){
    $('#kylefrontpage2').fadeIn(2500); }, 1300);
  setTimeout(function(){
    $('#kylefrontpage3').fadeIn(2500); }, 1600);
})


  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict
