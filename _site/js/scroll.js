// JavaScript Document

setTimeout(function(){

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
	var scroll_slow = scroll / 1.14;
	var p = $( "body" );
	var position = p.position();
	var scroll_done = (position.top - scroll) / 2 ;


	console.log();
	console.log(scroll_done);


	$('.begrüssung-textbox').css("transform", "translateY("+scroll_done+"px"+")");
});
	}, 0);
