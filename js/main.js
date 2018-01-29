$(function() {
		$('a[href*="#"]:not([href="#"])').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
		});
});

function addOpacity() {
	var title = document.getElementsByTagName("h1");
	title[0].style.opacity = "1";
}

window.onload = addOpacity;
