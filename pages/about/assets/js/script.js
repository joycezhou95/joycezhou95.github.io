$(document).ready(function(){

	$("#overview").click(function() {
		$("#overview").css("border-left","solid");
		$("#academics").css("border-left", "none");
		$("#art-design").css("border-left", "none");
		$("#personal").css("border-left", "none");
	    $('html,body').animate({
	        scrollTop: $("#overview-paragraph").offset().top - 100},
	        'slow');
	});


	$("#academics").click(function() {
		$("#overview").css("border-left","none");
		$("#academics").css("border-left", "solid");
		$("#art-design").css("border-left", "none");
		$("#personal").css("border-left", "none");	    $('html,body').animate({
	        scrollTop: $("#academic-paragraph").offset().top - 100},
	        'slow');

	});


	$("#art-design").click(function() {
		$("#overview").css("border-left","none");
		$("#academics").css("border-left", "none");
		$("#art-design").css("border-left", "solid");
		$("#personal").css("border-left", "none");
	    $('html,body').animate({
	        scrollTop: $("#art-paragraph").offset().top - 100},
	        'slow');
	});


	$("#personal").click(function() {
		$("#overview").css("border-left","none");
		$("#academics").css("border-left", "none");
		$("#art-design").css("border-left", "none");
		$("#personal").css("border-left", "solid");
	    $('html,body').animate({
	        scrollTop: $("#personal-paragraph").offset().top - 100},
	        'slow');
	});
	$("#academics").css("border-left","5px");

});