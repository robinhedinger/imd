var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
function layar(){
  if (ios) {
    console.log("iOS"),
    window.location.replace("http://weareimd.ch/layar-page");
  }
  else{
    console.log("Not iOSss");
    window.location.replace("http://weareimd.ch");
  }
}
