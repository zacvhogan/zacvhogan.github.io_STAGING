let clickCount = 0;
let clickMax = 6;
let popupLifespan = 3000;

let popupList = [
  "this does nothing",
  "please stop",
  "you'll break something",
  "are you for real?",
  "I need you to chill out",
  "NOW YOU'VE DONE IT"
];


$(document).ready(function(){

  $(".header-logo__image").on("click", function(){
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

  let popup = "<div class = 'header-logo__image__popup'>" + popupList[clickCount] + "</div>";
  let slideAmount;

  if (clickCount % 2 === 0) {
    $("#header-logo__popup-area-1").prepend(popup);
  $(".header-logo__image__popup").animate({
    opacity: 0,    
  }, 3000);
  }
  else {
    $("#header-logo__popup-area-2").prepend(popup);
  $(".header-logo__image__popup").animate({
    opacity: 0,    
  }, 3000);
  }

  

  
}




function finalAnimation(){



}