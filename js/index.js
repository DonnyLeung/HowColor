
var window_width = $(window).width();
	$('.body #box').css({'height':window_width*0.9+'px'});
var box_size = $('.body #box').width();
var lv=1;
var count_down = 30;
var row_num = [2,3,4,4,5,5,5,6,6,6,6,7,7,7,7,7,8,8,8,8,8,8,8]
reset_RowSize();

function reset_RowSize () {
	var row_allnum = row_num[lv-1]*row_num[lv-1];
	var rowOn_num = Math.floor(Math.random()*row_allnum);

	for(var i=0;i<row_allnum;i++){
		$('#box').prepend('<div class="row"><div></div></div>');
	}
	$('.row:eq('+rowOn_num+')').addClass('on');

	var row_size;
	row_size = box_size/row_num[lv-1]
	$('.body #box .row').css({'width': row_size+'px','height':row_size+'px'});
	console.log('lv='+lv,'row_num='+row_num[lv-1],'总格子数='+row_allnum,'on='+rowOn_num);
	$('.title #lv span').replaceWith('<span>'+lv+'</span>');
	set_RowColor();
	click_RowOn();
};
	
function click_RowOn(){ 
	$('.on').on('click',function(){
		lv = lv+1;
		$('.row').remove();
		reset_RowSize();
	});
}
if(count_down > 0 ){setInterval ("countDown()", 1000);}

function countDown(){
		count_down = count_down -1;
		$('.title #time span').replaceWith('<span>'+count_down+'</span>');
}

function set_RowColor(){
	var r=Math.round(Math.random()*100+100),
			g=Math.round(Math.random()*100+100),
			b=Math.round(Math.random()*100+100);
	var on_r=r+Math.round(Math.random()*15+10-row_num[lv-1]),
			on_g=g+Math.round(Math.random()*15+10-row_num[lv-1]),
			on_b=b+Math.round(Math.random()*15+10-row_num[lv-1]);
	$('.row div').css({'background':'rgb('+r+','+g+','+b+')'});
	$('.row.on div').css({'background':'rgb('+on_r+','+on_g+','+on_b+')'});
}
