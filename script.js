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
                <div class="project-tile">
                    <img src="https://media.istockphoto.com/vectors/programming-code-application-window-vector-id1124838925?k=6&m=1124838925&s=612x612&w=0&h=TbuwIMLPlZxN9jbuTcJanRwX33tkgNF7_PiIPvpPVm4="
                        alt="">
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>Laravel-php framework</p>
                    </div>
                    <i class="uil uil-github"></i>
                </div>
            </a>
            `
         }).join('')}  
`

const languages =["Python","PHP","Java","C++","C","Javascript","Dart","Markdown"];
const frameworks = ["Django","Laravel","Flutter"];
const libraries = ["Bootstrap","Jquery"];
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



