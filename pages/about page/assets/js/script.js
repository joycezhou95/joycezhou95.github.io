$(document).ready(function(){

	$("#overview").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#overview-paragraph").offset().top - 100},
	        'slow');
	});


	$("#academics").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#academic-paragraph").offset().top - 100},
	        'slow');
	});


	$("#art-design").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#art-paragraph").offset().top - 100},
	        'slow');
	});


	$("#personal").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#personal-paragraph").offset().top - 100},
	        'slow');
	});

});