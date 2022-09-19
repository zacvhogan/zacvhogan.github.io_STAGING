// Open all hyperlinks in new tab
// Find all <a> that are NOT for in-page navigation and set target = "_blank"

let links = document.querySelectorAll("a");

links.forEach((link) => {
  if (!link.classList.contains("button")){  
    link.setAttribute("target", "_blank");
  }
});



//