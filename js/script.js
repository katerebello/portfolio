const projects =[
    {
        title: "Instgram clone",
        image: "",
        link: "https://github.com/katerebello/laravel_project",
        technologies: [""],
    },
    {
        title: "Electronic store",
        image: "",
        link: "",
        technologies: [""],
    },
    {
        title: "Music application",
        image: "images/capture.jpg",
        link: "",
        technologies: [""],
    },
    

];

document.getElementById("projects").innerHTML = `
        ${projects.map(function(project){
            return `
            <a target="_blank" href=${projects[0].link} class="project-link">
                <div style="background-image: url(${project.image});color: red;" class="project-tile">
                    <div class="project-info">
                        <p class="project-title">${project.title}</p>
                        <p class="project-desc">Laravel-php framework</p>
                    </div>
                    <div class="project-icons">
                        <button>Live Demo<i class="uil uil-external-link-alt"></i></button>
                        <i class="uil uil-github "></i>
                    </div>
                </div>
            </a>
            `
        }).join('')}  
`


// onscroll effect 
const bodyy = document.querySelector("body");
window.addEventListener("scroll",()=>{
    bodyy.style.animation = "1s ease-out 0s 1 load";
});


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
// navbar toogle ends


// greet in the welcome 
const greet = document.querySelector("#greet");
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
d = new Date();
greet.innerHTML = `<i>Hope You are having a great ${weekday[d.getDay()]} 
&#128521 </i>
`;
