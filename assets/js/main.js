(function ($) {
"user strict";

// PRELOADER-START
$(".preloader-area").delay(500).animate({
    "opacity": "0"
}, 500, function () {
    $(".preloader-area").css("display", "none");
});
// PRELOADER-END


// SCROLL-TO-TOP-START
var ScrollTop = $(".scrollToTop");
$(window).on('scroll', function () {
  if ($(this).scrollTop() < 500) {
      ScrollTop.removeClass("active");
  } else {
      ScrollTop.addClass("active");
  }
});
// SCROLL-TO-TOP-END


// HEADER-FIXED-START
var fixed_top = $(".header-section");
$(window).on("scroll", function(){
    if( $(window).scrollTop() > 500){  
        fixed_top.addClass("animated fadeInDown header-fixed");
    }
    else{
        fixed_top.removeClass("animated fadeInDown header-fixed");
    }
});
// HEADER-FIXED-END


// WOW-START
if ($('.wow').length) {
    var wow = new WOW({
      boxClass: 'wow',
      // animated element css class (default is wow)
      animateClass: 'animated',
      // animation css class (default is animated)
      offset: 0,
      // distance to the element when triggering the animation (default is 0)
      mobile: false,
      // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
}
// WOW-END


//CREATE-BACKGROUND-IMAGE-START
(function background() {
    let img = $('.bg_img');
    img.css('background-image', function () {
        var bg = ('url(' + $(this).data('background') + ')');
        return bg;
    });
})();
// CREATE-BACKGROUND-IMAGE-END
    


})(jQuery);