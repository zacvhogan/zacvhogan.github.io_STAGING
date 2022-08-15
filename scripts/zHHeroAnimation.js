let clickCount = 0;
let clickMax = 6;

let popupList = [
  "this does nothing",
  "please stop",
  "you'll break something",
  "are you for real?",
  "I need you to chill out",
  "NOW YOU'VE DONE IT"
]


$(document).ready(function(){
 


  $(".image-hero").on("click", function(){
    if (clickCount < clickMax){
      showPopup();
      clickCount++;
    }
    else{
      finalAnimation();
    }
  });

});



function showPopup(){

  console.log(popupList[clickCount]);

}




function finalAnimation(){



}