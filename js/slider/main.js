$(window).load(function(){
	$('.slider').fractionSlider({
		'fullWidth': 			true,
		'controls': 			true, 
		'pager': 				false,
		'responsive': 			true,
		'dimensions': 			"1100,550",
		'timeout': 3000,
	    'increase': 			false,
		'pauseOnHover': 		false,
		'slideEndAnimation': 	true
	});
});