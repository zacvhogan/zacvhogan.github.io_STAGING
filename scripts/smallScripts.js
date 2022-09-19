// Open all hyperlinks in new tab
// Find all <a> and set target = "_blank"

let links = document.querySelectorAll("a");

links.forEach((link) => {
  link.setAttribute("target", "_blank");
});



//