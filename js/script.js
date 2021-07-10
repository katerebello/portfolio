// display navbar on mobile when icon clicked 
// const navbutton = document.querySelector("#navdisplay");
// const navbar = document.querySelector("#navbar");
// navbutton.addEventListener("click",()=>{
//     navbar.style.display = "block";
//     navbutton.style.display="none";
// });

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
                    <i class="uil uil-github"></i>
                </div>
            </a>
            `
         }).join('')}  
`


// onscroll effect 
const bodyy = document.querySelector("body");
window.addEventListener("scroll",()=>{
    console.log('Yay');
    bodyy.style.animation = "1s ease-out 0s 1 load";
});

// navbar toogle 
const navbutton = document.querySelector("#navdisplay");
const navbar = document.querySelector(".navbar");
navbutton.addEventListener("click",()=>{
    navbar.classList.toggle("navbardisplay");
});
