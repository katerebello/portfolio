const projects =[
    {
        title: "Instgram clone",
        image: "",
        link: "https://github.com/katerebello/laravel_project",
        technologies: ["PHP","BLADE"],
    },
    {
        title: "Electronic store",
        image: "",
        link: "",
        technologies: ["PHP","LARAVEL","BLADE"],
    },
    {
        title: "Music application",
        image: "images/capture.jpg",
        link: "",
        technologies: ["PYTHON","DJANGO",],
    },
    {
        title: "Gender predictor",
        image: "",
        link: "",
        technologies: ["PYTHON"],
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
                        <ul class="tech-ul">
                            ${(project.technologies).map(function(tech){
                                return `<li>${tech}</li>`
                            }).join('')}
                        </ul>
                    </div>
                    <i class="uil uil-github"></i>
                </div>
            </a>
            `
         }).join('')}  
`
