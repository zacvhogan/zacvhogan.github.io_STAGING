

function clickMenu ()
{   
    var navList = document.getElementById("nav-list");
    if(navList.style.display === "flex")
        {
            navList.style.display = "none";
        }
    else
        {
            navList.style.display = "flex";
        }      
}

function footerYear()
{
    var yearValue = document.getElementById("footer-year");
    yearValue.innerHTML = new Date().getFullYear();
}