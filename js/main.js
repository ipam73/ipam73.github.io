var paralaxEffect = function(){
	var bgHeight = $('.bg').outerHeight();
	function parallax(){
	    var scrolled = $(window).scrollTop();
	    $('.bg').css('height', (bgHeight-scrolled) + 'px');
	}
	$(window).scroll(function(){
	    parallax();
	});
};

var main = function() {

	paralaxEffect();

	// $(".jumbotron").append("<p>****Hellow there</p>");

};

$(document).ready(main);