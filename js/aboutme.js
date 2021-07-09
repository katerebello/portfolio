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
