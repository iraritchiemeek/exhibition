$(document).ready(function () {
	
	var landingPage = new LandingPage

	landingPage.appendDiv('fullscreen_image')
	landingPage.fullScreenImage('imgs/running.png')
	landingPage.fadeOutLandingImage()

	landingPage.appendDiv('landing_text_wrapper')
	landingPage.appendDiv('home_menu')
	landingPage.textLine('title', 'the_exhibition')
	landingPage.textLine('menu', 'collections shop contact')
	landingPage.textLine('subtitle', 'spring/summer1996')
	// landingPage.verticalText('EXHIBITION')
	// landingPage.verticalText('EXHIBITION')
	landingPage.appendImage('imgs/hugh_mundell.jpg')
})