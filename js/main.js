$(function() {
		$('a[href*="#"]:not([href="#"])').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
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
	RDsection.style.height = pixelHeight + "px";
}

RDbutton.onclick = function() {
	if(modalStatus) {
		changeHeight(0);
		modalStatus = false;
	}
	else {
		changeHeight(400);
		modalStatus = true;
	}
};
