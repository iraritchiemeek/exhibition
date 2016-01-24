function LandingPage () {
	
}

LandingPage.prototype.textWrapper = function() {
	$('#container').append('<div id="landing_text_wrapper"></div>')
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