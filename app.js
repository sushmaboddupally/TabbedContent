$(document).ready(function(){
	
	$('.tabs li').click(function(){
		var clickedTab = $(this).attr('data-tab');			// Tab which the user clicks

		$('.tabs li').removeClass('selected-tab');			// Removing selected tab
		$('.tab-description').removeClass('selected-tab');	// Removing selected description

		$(this).addClass('selected-tab');					// highlighting the selected tab
		$("#"+clickedTab).addClass('selected-tab');			// highlighting the selected description
	});

});