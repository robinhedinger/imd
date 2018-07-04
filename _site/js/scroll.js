// JavaScript Document

setTimeout(function(){

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
	var scroll_slow = scroll / 1.14;
	var p = $( "body" );
	var position = p.position();
	var scroll_done = (position.top - scroll) / 2 ;



	$('.begrüssung-textbox').css("transform", "translateY("+scroll_done+"px"+")");
});
	}, 0);

  setTimeout(function(){

  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
  	var scroll_slow = scroll / 1.14;
  	var p = $( "#detail1" );
  	var position = p.position();
  	var scroll_done = (position.top - scroll) / 2 ;


    $('#detail1 h2').css("transform", "translateY("+scroll_done+"px"+")");
  });
  	}, 0);

    setTimeout(function(){

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
      var scroll_slow = scroll / 1.14;
      var p = $( "#detail2" );
      var position = p.position();
      var scroll_done = (position.top - scroll) / 2 ;


      $('#detail2 h2').css("transform", "translateY("+scroll_done+"px"+")");
    });
      }, 0);

      setTimeout(function(){

      $(window).scroll(function (event) {
          var scroll = $(window).scrollTop();
        var scroll_slow = scroll / 1.14;
        var p = $( "#detail3" );
        var position = p.position();
        var scroll_done = (position.top - scroll) / 2 ;


        $('#detail3 h2').css("transform", "translateY("+scroll_done+"px"+")");
      });
        }, 0);

        setTimeout(function(){

        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
          var scroll_slow = scroll / 1.14;
          var p = $( "#detail4" );
          var position = p.position();
          var scroll_done = (position.top - scroll) / 2 ;


          $('#detail4 h2').css("transform", "translateY("+scroll_done+"px"+")");
        });
          }, 0);

          setTimeout(function(){

          $(window).scroll(function (event) {
              var scroll = $(window).scrollTop();
            var scroll_slow = scroll / 1.14;
            var p = $( "#detail5" );
            var position = p.position();
            var scroll_done = (position.top - scroll) / 2 ;


            $('#detail5 h2').css("transform", "translateY("+scroll_done+"px"+")");
          });
            }, 0);

            setTimeout(function(){

            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
              var scroll_slow = scroll / 1.14;
              var p = $( "#detail6" );
              var position = p.position();
              var scroll_done = (position.top - scroll) / 2 ;


              $('#detail6 h2').css("transform", "translateY("+scroll_done+"px"+")");
            });
              }, 0);
