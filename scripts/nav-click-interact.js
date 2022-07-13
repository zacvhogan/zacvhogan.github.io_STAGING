$(document).ready(function(){
  console.log("click function run");

  // On click of each nav link, run clickHandler and pass the click event to it
  $(".button-nav").children("a").on("click", function(click){
    clickHandler(click);
  });  
});



function clickHandler(click){
  console.log(click.target.parentElement.id);
  // Fetch id of section to scroll to
    // Use a strict naming convention for nav links and sections in HTML,
    // and generate the matching section name to scroll to 
  // Fetch y coords of section
  // scroll to these coords

}



