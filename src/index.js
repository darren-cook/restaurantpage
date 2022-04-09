import {initialload} from "./initial";
import {loadhome} from "./home";
import {loadmenu} from "./menu";
import {loadcontact} from "./contact";

initialload();

const navitems = document.querySelectorAll(".navbar");
navitems.forEach(navitem =>{
    navitem.addEventListener("click", function(){
        const activeitem = document.querySelector(".active");
        if(activeitem.id != navitem.id) {
            activeitem.classList.remove("active");
            activeitem.classList.add("inactive");
            navitem.classList.remove("inactive");
            navitem.classList.add("active");
            wipetab();
            buildtab(navitem.id);
        }
    })
})

function wipetab(){
    const towipe = document.querySelector(".wipe");
    towipe.remove();
}

function buildtab(tab){
    if(tab=="home"){
        loadhome();
    } else if(tab=="menu"){
        loadmenu();
    } else if(tab=="contact"){
        loadcontact();
    }
}