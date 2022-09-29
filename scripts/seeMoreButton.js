// Find all elements in DOM with the see-more-button class, compile into array.
let buttonList = document.querySelectorAll(".see-more-button");

// For each button add property 'activated'
buttonList.forEach((button) => button.activated = false);

// For each button add event listener "click".
buttonList.forEach((button) => button.addEventListener("click", buttonClick.bind(button)));

function buttonClick() {  
  // For each button, generate selector for extended content div using the className of the parent <div> and an identifying suffix. 
  // THIS references current button.
  // TODO: Performance: maybe unwise to do this on EVERY button click? Try on page load.  
  let expandableContent = document.querySelector("." + this.closest("div").className + "__extended");  
  let button = this;
  let buttonIcon = this.firstChild;

  // Set max height of expandable container to fit current contents
  let maxHeight = expandableContent.scrollHeight + "px";  
  console.log(maxHeight);
  console.log(this.activated);

  // Set up anime.js animation
  // Initial values set in styles.css, apart from height which uses a [to, from] range
  // Do not replace the to-from range with a single to value - this breaks anime.js
  let hideShowAnim = anime({
    targets: expandableContent,    
    height: [30, maxHeight],   
    "-webkit-mask-image": "linear-gradient(to bottom, black, rgba(0, 0, 0, 1))",
    duration: 250,
    easing: 'easeInQuad'
  });

  // TODO: The below code plays the animation forwards smoothly, but reverts instantly when
  // it should smoothly reverse animation. Why?
  // Have tried checking whether hideShowAnim.began is true before setting reverse - no luck.

  if (button.activated == false){
    // Animate
    hideShowAnim.play();
    // Change button icon
    buttonIcon.classList.remove("fa-chevron-down");
    buttonIcon.classList.add("fa-chevron-up");
    // Change activated status
    button.activated = true;

  }
  else if (button.activated == true) {

    hideShowAnim.play();  
    hideShowAnim.reverse();

    buttonIcon.classList.remove("fa-chevron-up");
    buttonIcon.classList.add("fa-chevron-down");

    button.activated = false;
  }
  
}









