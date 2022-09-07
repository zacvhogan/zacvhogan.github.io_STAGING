
// Find all elements in DOM with the see-more-button class, compile into array
let buttonList = document.querySelectorAll(".see-more-button");


// For each item (button) in buttonList[], add event listener "click".
// Event listener attaches an instance of buttonClick func to each button.
// Each buttonClick func has 'this' reference bound to the each button, allows us to 
//  access button by reference within each buttonClick instance.
buttonList.forEach((button) => button.addEventListener("click", buttonClick.bind(button)));



function buttonClick() { 

  // For each button, generate selector for extended content <p>
  // Using parent element className and identifying suffix
  let extendedContentSelector = this.closest("div").className + "__extended";



  let extendedContentCSS = window.getComputedStyle(extendedContent);
  let extendedContentState = extendedContentCSS.getPropertyValue('visibility');
  console.log(extendedContentState);
  console.log(ev);

  if (extendedContentState == "visible"){
    console.log("time to hide");
  }
  else if (extendedContentState == "hidden"){
    console.log("Time to show");
  }


  // if (extendedContent.css{
  //   console.log(extendedVisible);
  //   // showContent("normal", extendedContent, maxHeight);
  //   extendedVisible = true;
  //   // button.innerHTML = "Show Less";
  // }
  // else if (extendedVisible === true){
  //   console.log(extendedVisible);
  //   // showContent("reverse", extendedContent, maxHeight);
  //   extendedVisible = false;
  //   // button.innerHTML = "Show More";
  // }  
}


function showContent(animDirection, extendedContent, maxHeight){

  let heightDelay;
  let visibilityDelay;
  
  // TODO - convoluted solution, revise.
  // If we're making the section visible, grow section FIRST then show content
  // Otherwise, hide content first then shrink section
  if (animDirection == "normal"){
    heightDelay = 0;
    visibilityDelay = 300;
    console.log("show");
  }
  else{
    heightDelay = 300;
    visibilityDelay = 0;
  }

  // Animation keys and options for height and visibilty 
  let animHeightKeys = [
    {
      height: "0px"        
    },  
    {
      height: maxHeight           
    }
  ];

  let animHeightOptions = {
    duration: 350,
    fill: "forwards",
    easing: "ease",
    direction: animDirection,
    delay: heightDelay,
    visibility: visibile
  };

  let animVisibilityKeys = [
    {
      opacity: 0,
      visibility: "hidden"      
    },   
    {
      opacity: 1,
      visibility: "visible"          
    }
  ];

  let animVisibilityOptions = {
    delay: visibilityDelay,
    duration: 350,    
    fill: "forwards",
    easing: "ease",
    direction: animDirection,
    visibility: hidden
  };

  // Do the animation
  extendedContent.animate(animHeightKeys, animHeightOptions);
  extendedContent.animate(animVisibilityKeys, animVisibilityOptions);

}




/*
On click
- Animate to be taller, then fade in contents
- Change button text to Less info (arrow up)


*/

