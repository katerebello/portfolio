// page scroll indicator starts
const body = document.querySelector("body");
const progressBar = document.querySelector("#progress-bar");
window.addEventListener("scroll",()=>{
    console.log("YAY");
    let scrollValue = (window.scrollY);
    let pageHeight = body.clientHeight -(window.innerHeight);
    // console.log(scrollValue);
    let progressPercentage = (scrollValue / pageHeight) * 100;
    console.log( progressPercentage + "%");
    document.getElementById("progress-bar").style.width = progressPercentage + "%";

});

// page scroll indicator end 
