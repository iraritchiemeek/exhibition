function LandingPage () {
	
}

LandingPage.prototype.fullScreenImage = function(url) {
	$('#fullscreen_image').css({'backgroundImage':'Url(' + url + ')'})
};

LandingPage.prototype.fadeOutLandingImage = function() {
	function fade () {
		$('#fullscreen_image').fadeOut('slow')
	}
	setTimeout(fade, 4000);
};

LandingPage.prototype.appendDiv = function(id) {
	$('#container').append('<div id="' + id + '"></div>')
};

LandingPage.prototype.textLine = function(id, text) {
	$('#landing_text_wrapper').append('<div class="text_line" id="' + id + '">' + text + '</div>')
};

LandingPage.prototype.verticalText = function(text) {
	$('#container').append('<div class="vertical_text">' + text + '</div>')
};

LandingPage.prototype.appendImage = function(url) {
	$('#container').append('<div id="home_image"></div>')
	$('#home_image').css({'backgroundImage':'url(' + url + ')'})
};

LandingPage.prototype.menuItem = function(text, url) {
	$('#container').append()
};