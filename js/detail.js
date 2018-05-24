
function detail(part){
  var d = document.getElementById(part);
  //d.className = "detail";
  $( d ).toggleClass( "detail" );

  var x = document.getElementById(part).querySelectorAll(".video");
  x[0].loop = true;

}