$(document).ready(function () {
	
	var landingPage = new LandingPage

	landingPage.appendDiv('landing_text_wrapper')
	landingPage.appendDiv('home_menu')
	landingPage.textLine('title', 'the_exhibition')
	landingPage.textLine('quote', 'i have considered all acts of oppression')
	landingPage.textLine('subtitle', 'spring/summer1996')
	landingPage.verticalText('EXHIBITION')
	landingPage.verticalText('EXHIBITION')
	landingPage.appendImage('imgs/hugh_mundell.jpg')
})