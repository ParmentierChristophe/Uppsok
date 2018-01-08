$(function() {
 $('a[href*="#"]:not([href="#"])').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
   scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
 });


});


$(document).ready(function() {

 $('.all-slides').slick({
  infinite: true,
  nextArrow: '<i class="fa fa-arrow-right arrows"></i>',
  prevArrow: '<i class="fa fa-arrow-left arrows"></i>',
  arrows: true,
  speed: 500,
  centerMode: true,
  centerPadding: '0px',
  cssEase: 'ease',
  slidesToShow: 1,
  adaptiveHeight: true
 });
});
