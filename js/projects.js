const projects =[
    {
        title: "Cloud Based Video Hosting Platform",
        image: "",
        link: "https://github.com/csk18-22/Cloud-based-video-hosting-platform",
        technologies: ["PHP","LARAVEL"],
    },
    {
        title: "Instgram clone",
        image: "",
        link: "https://github.com/katerebello/laravel_project",
        technologies: ["PHP","BLADE"],
    },
    {
        title: "Electronic store",
        image: "../images/bgimg.jpg",
        link: "",
        technologies: ["PHP","LARAVEL","BLADE"],
    },
    {
        title: "Music application",
        image: "../images/profile-pic.png",
        link: "",
        technologies: ["PYTHON","DJANGO",],
    },
    {
        title: "Gender classification based on age and gender",
        image: "../images/bgimg.jpg",

        link: "",
        technologies: ["PYTHON","ML"],
    },
    {
        title: "Gender prediction based on name",
        image: "../images/bgimg.jpg",
        
        link: "",
        technologies: ["Flutter","DART","API"],
    },
     {
        title: "Gender predictor",
        image: "../images/bgimg.jpg",
        
        link: "",
        technologies: [""],
    },
  

];

document.getElementById("projects").innerHTML = `
        ${projects.map(function(project){
            return `
                <div style="background-image: url(${project.image});color: red;" class="project-tile">
                    <div class="project-info">
                        <p class="project-title">${project.title}</p>
                        <ul class="tech-ul">
                            ${(project.technologies).map(function(tech){
                                return `<li>${tech}</li>`
                            }).join('')}
                        </ul>
                    </div> 
                    <div class="project-icons">
                        <a target="_blank" href=${projects[0].link} class="project-link">
                            <i class="uil uil-github "></i>
                        </a>
                    </a>
                    </div>
                </div>
            `
        }).join('')}  
`



// document.getElementById("projects").innerHTML = `
//     ${projects.map(function(project){
//         return`
//                 <div class="project-border">
//                     <img class="project-img" src="images/bg.jpg" alt="">
//                     <div>
//                         <p>${project.title}</p>
//                     </div>
//                 </div>
//         `
//     }).join('')}
// `
