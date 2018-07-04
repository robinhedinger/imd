		var things = [/*Koreanisch*/		/*'안녕하세요',/*For the Seraina*/
					  /*Russisch*/			/*'Привет',
					  /*Französisch*/		'Bonjour',
					  /*Hindi*/				/*'नमस्ते',
					  /*Englisch*/			'Hello',
					  /*Chinesisch*/		/*'你好',
					  /*Spanisch*/			'Hola',
					  /*Italienisch*/		'Ciao',
					  /*Rätroromanisch*/	'Allegra',
					  /*Deutsch*/			'Hallo',
					  /*Schweizerdeutsch*/	'Hoi',
					  /*Arabisch*/			/*'مرحبا',
					  /*:)*/				/*'ヾ(＾-＾) '
					 ];

		var thingsmobile = [
					  /*Hindi*/				/*'नमस्ते',
					  /*Englisch*/			'Hello',
					  /*Chinesisch*/		/*'你好',
					  /*Spanisch*/			'Hola',
					  /*Italienisch*/		'Ciao',
					  /*Deutsch*/			'Hallo',
					  /*Schweizerdeutsch*/	'Hoi'

					 ];
function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}

if (isTouchDevice()) {
	window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
    // those angles are in degrees
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;

    // JS math works in radians
    var betaR = beta / 180 * Math.PI;
    var gammaR = gamma / 180 * Math.PI;
    var spinR = Math.atan2(Math.cos(betaR) * Math.sin(gammaR), Math.sin(betaR));

	// convert to usefull output
	var gammaF = gamma / 5;
	var betaF = (beta - 60) / 5;

	if(gammaF>10){
		gammaF=9;
	}
	if(gammaF<-10){
		gammaF=-9;
	}
	if(betaF>15){
		betaF=14;
	}
	if(betaF<-15){
		betaF=-14;
	}
    //convert back to degrees
    var spin = spinR * 180 / Math.PI;
	$('#title').css("transform", "translateX("+gammaF+"px"+")"+"translateY("+betaF+"px"+")");

	if(Math.round(gammaF)>= -1 && Math.round(gammaF)<= 1 && Math.round(betaF)>=-1 && Math.round(betaF)<=1){
		var thingmobile = thingsmobile[Math.floor(Math.random()*thingsmobile.length)];
    	document.getElementById("titletext").innerHTML = thingmobile;
		document.getElementById("titletext2").innerHTML = thingmobile;
	    $("#titletext2").css("color", "#370edb");
	}
	else{
        $("#titletext2").css("color","#ff5f84");
	}
}
}
else {
$(document).ready(function(){

"use strict";
$("#title").mousemove(function(e){


	if (e.pageX < ($(window).width() / 1.8) && e.pageX > ($(window).width() / 2.2) && e.pageY < ($(window).height() / 1.6) && e.pageY > ($(window).height() / 2.4)) {
		var thing = things[Math.floor(Math.random()*things.length)];
    	document.getElementById("titletext").innerHTML = thing;
		document.getElementById("titletext2").innerHTML = thing;
        $("#titletext2").css("opacity", "0");
	}
  else{
        $("#titletext2").css("opacity","1");
  }
});
});



$(document).ready(function() {
"use strict";
var movementStrength = -30;
var movementStrength2 = -10;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
var height2 = movementStrength2 / $(window).height();
var width2 = movementStrength2 / $(window).width();
$("#landingpage").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var pageX2 = e.pageX - ($(window).width() / 2);
          var pageY2 = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 50;
          var newvalueY = height * pageY * -1 - 50;
          var newvalueX2 = width2 * pageX2 * -1 - 50;
          var newvalueY2 = height2 * pageY2 * -1 - 50;
          $('#title').css("transform", "translateX("+newvalueX+"px"+")"+"translateY("+newvalueY+"px"+")");
          $('#title2').css("transform", "translateX("+newvalueX2+"px"+")"+"translateY("+newvalueY2+"px"+")");



});
});


}

function customize(){
	if ($( "#customize" ).hasClass( "customize-extended" )) {
		$("#customize").removeClass("customize-extended");
	}
	else{
		$("#customize").addClass("customize-extended");
	}

}

function removestate(){
	$("#color1").removeClass("color-crumped");
	$("#color2").removeClass("color-crumped");
	$("#color3").removeClass("color-crumped");
	$("#color1").removeClass("color-active");
	$("#color2").removeClass("color-active");
	$("#color3").removeClass("color-active");
}
function color1(){
		removestate();
	  changecolor1()
		$("#color1").addClass("color-active");
		$("#color2").addClass("color-crumped");
		$("#color3").addClass("color-crumped")
}

function color2(){
		removestate();
	  changecolor2()
		$("#color2").addClass("color-active");
		$("#color1").addClass("color-crumped");
		$("#color3").addClass("color-crumped");
}

function color3(){
		removestate();
	  changecolor3()
		$("#color3").addClass("color-active");
		$("#color1").addClass("color-crumped");
		$("#color2").addClass("color-crumped");
}

function changecolor1(){
	var primary= "#ff5f84"
	var secondary="#001e66"
	var third= "black"
	changecolor();

function changecolor(){
	$(".titletext2")
	    .css( "color", secondary );
	$("#landingpage")
			 .css( "background", primary )
			 .css( "transition", "0.2s");
	$(".titletext")
			.css( "color", primary);
	$(".begrüssung")
			.css( "background", primary);
	$(".begrüssung-textbox")
			.css( "background", primary)
			.css( "color", third);
	$(".footer")
			.css( "background", primary);
	$(".footer-desc")
			.css( "color", third);
}
}

function changecolor2(){
	var primary= "#001e66"
	var secondary="rgb(246, 114, 145)"
	var third= "white"
	var fourth= "cyan"
	changecolor();

function changecolor(){
	$(".titletext2")
	    .css( "color", secondary );
	$("#landingpage")
			 .css( "background", primary )
			 .css( "transition", "0.2s");
	$(".titletext")
			 .css( "color", primary);
	$(".begrüssung")
			.css( "background", primary);
	$(".footer")
			.css( "background", primary);
	$(".footer-desc")
			.css( "color", fourth);
	$(".begrüssung-textbox")
			.css( "background", primary)
			.css( "color", third);
	$(".footer-img")
			.css( "src", "img/ui/Swisscom Logo.svg");
}
}

function changecolor3(){
	var primary= "#fdf5ea"
	var secondary="rgb(10, 38, 112)"
	var third= "black"
	changecolor();

function changecolor(){
	$(".titletext2")
	    .css( "color", secondary );
	$("#landingpage")
			 .css( "background", primary )
			 .css( "transition", "0.2s");
	$(".titletext")
			 .css( "color", primary);
	$(".begrüssung")
			.css( "background", primary);
	$(".footer")
			.css( "background", primary)
			.css( "color", third);
	$(".begrüssung-textbox")
			.css( "background", primary)
			.css( "color", third);
	$(".footer-desc")
			.css( "color", third);
	$(".footer-img")
			.css( "background-image", "img/ui/Swisscom Logo2.svg");
}
}
