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

//Slider

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


//Function to make the main title progressivly appear on home page
function addOpacity() {
	var title = document.getElementsByTagName("h1");
	title[0].style.opacity = "1";
}

window.onload = addOpacity;

//Function to deploy the rd section with projetcs

var RDbutton = document.getElementById("RDmodal");

var modalStatus = false;

function changeHeight(pixelHeight) {
  var RDsection = document.getElementById("RDsection");
  if(Number.isInteger(pixelHeight)) {
    RDsection.style.height = pixelHeight + "px";
  }
  else {
    RDsection.style.height = pixelHeight;
  }
}

RDbutton.onclick = function() {
	if(modalStatus) {
		changeHeight(0);
		modalStatus = false;
		setTimeout(function(){
			RDbutton.innerHTML = "Voir les projets";
		}, 400);
	}
	else {
		changeHeight("auto");
		modalStatus = true;
		setTimeout(function(){
			RDbutton.innerHTML = "Masquer";
		}, 400);
	}
};
