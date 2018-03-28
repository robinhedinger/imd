function detail(part){

  var d = document.getElementById(part);
  d.className = " detail";

  var x = document.getElementById(part).querySelectorAll(".video");
  x[0].loop = true;

}

function lessdetail(part){

  var d = document.getElementById(part);
  d.className = " part";

  var x = document.getElementById(part).querySelectorAll(".video");
  x[0].loop = false;


}
