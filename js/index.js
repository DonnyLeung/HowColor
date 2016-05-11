var window_width = $(window).width();
	$('.body .box').css({'height':window_width*0.9+'px'});

var box_size = $('.body .box').width();
var row_size;
	row_size = box_size/2
	$('.body .box .row').css({'width': row_size+'px','height':row_size+'px'})