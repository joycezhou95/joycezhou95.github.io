$(document).ready(function(){

	// SCROLL TO CODE

	$("#traditional-art").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#traditional-header").offset().top - 100},
	        'slow');
	});


	$("#graphic-design").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#graphic-design-header").offset().top - 100},
	        'slow');
	});


	$("#typography").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#typography-header").offset().top - 100},
	        'slow');
	});

	//HIDE AND SHOW MODAL CONTAINER

	$(".icon").click(function(event) {
		$("#modal-container").show();
		// var replace = $(".icon").children().attr("src");
		var replace = $(this).children([0]).attr("src");
		$("#original-image").attr("src", replace);
	});

	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
		var empty = '';
		$("#original-image").attr("src", empty);
	})

	$("#close-button").click(function() {
		$("#modal-container").hide();
		var empty = '';
		$("#original-image").attr("src", empty);
	})

});