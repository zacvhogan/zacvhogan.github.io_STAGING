
// Find all elements in DOM with the see-more-button class, compile into array
let buttonList = document.querySelectorAll(".see-more-button");


// For each item (button) in buttonList[], add event listener "click".
// Event listener attaches an instance of buttonClick func to each button.
// Each buttonClick func has 'this' reference bound to the each button, allows us to 
//  access button by reference within each buttonClick instance.
buttonList.forEach((button) => button.addEventListener("click", buttonClick.bind(button)));



function buttonClick() { 

  // For each button, generate selector for extended content <p> paragraph
  // Using the className of the parent <div> and an identifying suffix. 
  // TODO: Probably shouldn't be doing this on each click? Get advice. Maybe refactor to do this once per page load instead.
  let extendedContentSelector = "." + this.closest("div").className + "__extended";
  let extendedContent = document.querySelector(extendedContentSelector);    

  // Get current visibility status of the extended content DOM node
  // Do this once per click to ensure visiblity status always up to date
  // Use visibility status of node instead of tracking via secondary variable - reduced chance of reassignment errors.
  let extendedContentCSS = window.getComputedStyle(extendedContent);
  let extendedContentState = extendedContentCSS.getPropertyValue('visibility');

 

  // On each click, check content visibility
  // Toggle - run anim. to shift to inverse state via toggleContent()
  if (extendedContentState == "visible"){
    toggleContent(extendedContent, "hide", this)    
  }
  else if (extendedContentState == "hidden"){
    toggleContent(extendedContent, "show", this)    
  }
}


function toggleContent(extendedContent, action, button){  

  let heightDelay;
  let visibilityDelay;
  let animDirection;
  let animDuration = 300; 
  
  // Maximum height of extendable content. Calculated each button click to ensure up to date with
  //  document and viewport dimensions.
  let maxHeight = extendedContent.scrollHeight + "px";

  // If the action is to show, set CSS animation to play forwards. Else, reverse the animation.
  action == "show"? animDirection = "normal" : animDirection = "reverse";
  
  // Set animation timings.
  // If we're making the section visible, grow section FIRST then show content
  // Otherwise, hide content first then shrink section
  // TODO: convoluted solution, revise?
  if (animDirection == "normal"){
    heightDelay = 0;
    visibilityDelay = animDuration;    
  }
  else{
    heightDelay = animDuration;
    visibilityDelay = 0;
  }

  // Set animation keyframes and options
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
  };

  let animVisibilityKeys = [
    {
      opacity: 0,
      // Set visibility of extendable node to track status 
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
  };

  // Run the animations for height and visibility
  extendedContent.animate(animHeightKeys, animHeightOptions);
  extendedContent.animate(animVisibilityKeys, animVisibilityOptions);
  console.log(button);

// TODO: update height of extendedContent on window resize to retain good formatting
// TODO: Change button text on click


  setTimeout(() => {toggleButton(action, button)}, animDuration);
}


function toggleButton(action, button){
  action == "show"? button.innerHTML = "Less Info" : button.innerHTML = "More Info";
  console.log("trigger");
}



