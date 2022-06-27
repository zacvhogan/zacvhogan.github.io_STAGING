var x = 0;

$(document).ready(function(){
  
  

  const navKeyValuePairs = {
    "section-header": "#nav-button-header",
    "section-web": "#nav-button-web",
    "section-art": "#nav-button-art",
    "section-fungibles": "#nav-button-fungibles",
    "section-me": "#nav-button-me",
    "section-contact": "#nav-button-contact"
  };

  

 
  $(window).scroll(function(){
     scrollFunction(navKeyValuePairs);   
  });

});


function scrollFunction(navKeyValuePairs) {


  let currentSection = "";
  let currentNav = "";
  $(".nav-indicator").css("width","0%");
  
// Is element dominant on screen?  
// If a section is more than 30% of the window height up the page,
// set it to the current section
// TODO note this is a bit of a dirty solution - currentSection will be reassigned multiple times
// per scroll, with the last assignment always being the bottom-most section that
// matches the criteria.
// It works, but excess assignments is a waste of memory/processing.
// Big enough to be concerned about?
  $(".section").each(function(){    
    if(window.scrollY > ($(this).offset().top - (window.innerHeight * 0.7))) {
      currentSection = $(this).prop("id");      
    }    
  });
  

// Take current section and apply CSS to the associated nav button
// use key value pair object to find.




  currentNav = navKeyValuePairs[currentSection];
  console.log("Current section = " + currentNav);

  $(currentNav).children(".nav-indicator").css("width", "100%"); 
 
}