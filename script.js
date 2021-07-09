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


// display navbar on mobile when icon clicked 
const navbutton = document.querySelector("#navdisplay");
const navbar = document.querySelector("#navbar");
navbutton.addEventListener("click",()=>{
    navbar.style.display = "block";
    navbutton.style.display="none";
});

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
    {
        title: "Gender predictor",
        image: "",
        link: "",
        technologies: [""],
    },
    {
        title: "Electronic store",
        image: "",
        link: "",
        technologies: [""],
    },
     {
        title: "Gender predictor",
        image: "",
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

const languages =["Python","PHP","Java","C++","C","Javascript","Dart","Markdown"];
const frameworks = ["Django","Laravel","Flutter","Bootstrap"];
const libraries = ["Jquery"];
const technologies = ["Github","Git"];

document.getElementById("languages").innerHTML = `
    ${languages.map(function(item){
        return `
        <span class="lang">${item}</span>`
    }).join('')}

`

document.getElementById("frameworks").innerHTML = `
    ${frameworks.map(function(item){
        return `
        <span class="lang">${item}</span>`
    }).join('')}

`
document.getElementById("libraries").innerHTML = `
    ${libraries.map(function(item){
        return `
        <span class="lang">${item}</span>`
    }).join('')}

`
document.getElementById("technologies").innerHTML = `
    ${technologies.map(function(item){
        return `
        <span class="lang" >${item}</span>`
    }).join('')}

`


