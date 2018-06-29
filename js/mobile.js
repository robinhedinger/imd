var phone = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
function mobile(){
  if (phone) {
    $(".video").hide();
    alert("you're on the mobile verson. Gifs are loaded");
  }
  else{
    $(".video").hide();
  }
}
