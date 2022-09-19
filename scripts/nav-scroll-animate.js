// Dependancies
// Relies on a series of #nav-button-NAME divs with .nav-indicator child objects
// On scroll, find the current dominant section visible on the page,
// find the related nav-button
// apply CSS to the .nav-indicator for that button to highlight it
// while resetting CSS for all other .nav-indicators each scroll

const buttonActive = "button__bottom-spacer--active";

$(document).ready(function(){
  console.log("nav-scroll-animate.js running");
  // Set header button highlight on initial page load
  $("#button-header").children("a").children(".button__bottom-spacer").addClass(buttonActive)
  

  $(window).scroll(function(){
      scrollFunction();   
  });  

});


function scrollFunction(navKeyValuePairs) {
  // console.log("scroll");

  // Each Scroll...
  // Apply CSS to set width of all nav-indicator elements to 0  
  // If a section is more than 30% of the window height up the page,
    // set it to the currentSection variable
    // access the navKeyValuePairs object and fetch the ID of the
    // nav-button that matches the currentSection
    // apply CSS to the nav-button to show active, overriding the initial
    // 0% width CSS


// TODO 
// Memory Waste?
  // This is a bit of a dirty solution - currentSection will be reassigned
  // as will the CSS for ALL nav buttons multiple times
  // per scroll, with the last assignment always being the bottom-most section that
  // matches the criteria.
  // It works, but excess assignments is a waste of memory/processing.
  // Big enough to be concerned about?
// Inflexible
  // Use of a hard-coded object literal to store key-value pairs
  // Means addition or removal of sections requires updates in mulitple places

  
  let currentSection = "";
  let currentNav = "";
  $(".button__bottom-spacer").removeClass(buttonActive); 

  // 
  $(".section").each(function(){    
    if(window.scrollY > ($(this).offset().top - (window.innerHeight * 0.5))) {
      currentSection = $(this).prop("id");      
    }        
  });  

// Take current section and apply CSS to the associated nav button
// use key value pair object to find.

  currentNav = "#button-" + currentSection.replace("section-", "");
  console.log("current nav" + currentNav);

  // Add class buttonActive to the relevant nav button
  // This traversal seems bananas too long
  // Get feedback on this
  $(currentNav).children(".button__bottom-spacer").addClass("button__bottom-spacer--active"); 
};

