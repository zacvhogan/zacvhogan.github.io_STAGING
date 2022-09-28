

anime([]);

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
  // TODO: Potential issue: maybe unwise to do this on every button click?
  // Maybe refactor to do this once per page load instead.
  let extendedContentSelector = "." + this.closest("div").className + "__extended";
  console.log(extendedContentSelector);
  let extendedContent = document.querySelector(extendedContentSelector);    


  // Get current height of extendable content and use this to determine if we need to hide or show content.
  // Assume any extendable content won't be less than 100px tall, test against this number.

  // TODO: this creates a barrier to extending the code or making changes down the line - 
  // Requires that the height px value is manually edited to match across CSS and JS
  // WILL INTRODUCE BUGS if the height is changed too much in the CSS.
  // Revise.
  
  let extendedContentHeight = parseInt(document.defaultView.getComputedStyle(extendedContent).height);
  
  if (extendedContentHeight > 100 ){    
    toggleContent(extendedContent, "hide", this);  
    
  }
  else {
    toggleContent(extendedContent, "show", this);      
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
      height: "50px"        
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
      "mask-size": "1px 1px",
      "-webkit-mask-size": "1px 1px",                  
    },   
    {            
      "-webkit-mask-size": "1px 1px",
      "mask-size": "1px 1px",
      color: "teal"
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

// TODO: update height of extendedContent on window resize to retain good formatting



  setTimeout(() => {toggleButton(action, button)}, animDuration);
}


function toggleButton(action, button){
  action == "show"? button.innerHTML = "Less Info" : button.innerHTML = "More Info";
  console.log("trigger");
}



