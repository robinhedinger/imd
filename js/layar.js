var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
function layar(){
  if (ios) {
    alert("iOS")
  }
  else{
    alert("not iOS, probably Android or Desktop")
  }
}
