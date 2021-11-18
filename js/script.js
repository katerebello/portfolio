const projects =[
     
    {
        title: "Gender Classification Based on Name",
        image: "../images/profile-pic.png",
        link: "https://github.com/katerebello/gender-predictor-flutter",
        technologies:["DART","FLUTTER","API"],
    },
    
     {
        title: "Electronic store",
        image: "../images/bgimg.jpg",
        link: "https://github.com/katerebello/electronic-store-laravel",
        technologies: ["PHP","LARAVEL","BLADE"],
    },
     {
        title: "Instgram clone",
        image: "",
        link: "https://github.com/katerebello/Instagram_clone_laravel",
        technologies: ["PHP","BLADE"],
    },
    {
        title: "Facial Image Classification",
        image: "../images/profile-pic.png",
        link: "#",
        technologies: ["PYTHON","MACHINE LEARNING"], 
    },
    {
        title: "Music application",
        image: "../images/profile-pic.png",
        link: "https://github.com/katerebello/python_project_sem4",
        technologies: ["PYTHON","DJANGO",],
    },
   
    
];

document.getElementById("projects").innerHTML = `
        ${projects.map(function(project){
            return `
                <div style="color: red;" class="project-tile">
                    <div class="project-info">
                        <p class="project-title">${project.title}</p>
                        <ul class="tech-ul">
                            ${(project.technologies).map(function(tech){
                                return `<li>${tech}</li>`
                            }).join('')}
                        </ul>
                    </div> 
                    <div class="project-icons">
                        <a target="_blank" href=${project.link} class="project-link">
                            <i class="uil uil-github "></i>
                        </a>
                    </a>
                    </div>
                </div>
            `
        }).join('')}  
`


// onscroll effect 
const bodyy = document.querySelector("body");
window.addEventListener("scroll",()=>{
    bodyy.style.animation = "1s ease-out 0s 1 load";
});




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
