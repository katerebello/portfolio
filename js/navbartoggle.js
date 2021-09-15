// navbar toogle  on mobile screens starts
const navbutton = document.querySelector("#navdisplay");
const navbar = document.querySelector(".navbar");
const navicon = document.querySelector("#navicon");
navbutton.addEventListener("click",function(){
    navbar.classList.toggle("navbardisplay");
    // navicon.toggleClass("uil-bars uil-user");
    console.log(navicon.classList.contains('uil-user'));
    if(navicon.classList.contains('uil-bars')){
        navicon.classList.remove('uil-bars');
        navicon.classList.add('uil-times');
    }
    else if(navicon.classList.contains('uil-times')){
        navicon.classList.remove('uil-times');
        navicon.classList.add('uil-bars');
    }
});