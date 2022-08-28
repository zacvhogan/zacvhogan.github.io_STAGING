let myButton = document.querySelector(".web-portfolio__see-more-button");
let extendedContent = document.querySelector(".web-portfolio__extended");

myButton.addEventListener("click", buttonClick);

function buttonClick() {

  console.log("click");

  let extendedContentAnimKeys = [
    {
      "max-height": "0px",
      height: "1px",
      //opacity: 0,
      visibility: "hidden"
    },
    {
      "max-height": "300px",
      //opacity: 1,
      visibility: "visible",
      height: "100px"
    }
  ];

  let extendedContentAnimOptions = {
    duration: 1000,
    //fill: "forwards"

  };

  extendedContent.animate(extendedContentAnimKeys, extendedContentAnimOptions);

  
}


/*
On click
- Animate to be taller, then fade in contents
- Change button text to Less info (arrow up)


*/

