var phone = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
function mobile(){
  if (phone) {
    $(".video").hide();
  }
  else{
    $(".gif").hide();
  }
}
