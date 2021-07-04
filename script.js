function displaynav(){
    var navbar = document.getElementById("navbar");
    var navbutton = document.getElementsByClassName("nav-button");
    if(document.getElementById("navbar").style.display == 'block'){
        navbar.style.display = 'none';
        navbutton.style.display = "block";
    }
    else{
        navbar.style.display = 'block';
        navbutton.style.display = "none";
    }
}



