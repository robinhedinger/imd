counter = 0;


//function open_work(){
//    var element = document.getElementById("fragment");
//    element.style.display = "block";
//  }

function toggleDiv(id) {
    const div = document.querySelectorAll(".fragment");
    div.forEach(element => {
       
    });
    for(i = 0; i<div.length; i++){
        if(counter == 0){
            div[i].style.display = "block";
            if(i == div.length-1){
            counter +=1;
            }
        } else if (counter == 1) {
            div[i].style.display = "";
            if(i == div.length-1){
                counter -=1;
                }
        }
    }
    
}