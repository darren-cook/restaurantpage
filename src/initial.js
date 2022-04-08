import {loadhome} from "./home";

function initialload() {
    const content = document.querySelector("#content");

    content.appendChild(loadheader());
    content.appendChild(loadmaincontent());
}

function loadheader() {
    const header = document.createElement("div");
    header.setAttribute("id","header");

    const heading = document.createElement("div");
    heading.setAttribute("id","heading");
    heading.textContent = "Cook's Cookies";

    header.appendChild(heading);

    return header;
}

function loadmaincontent(){
    const maincontent = document.createElement("div");
    maincontent.setAttribute("id","maincontent");

    const navbar = document.createElement("nav");
    navbar.setAttribute("id","navbar");

    const home = document.createElement("div");
    home.setAttribute("id","home");
    home.className = "active";
    home.classList.add("navbar");
    home.textContent = "Home";
    const menu = document.createElement("div");
    menu.setAttribute("id","menu");
    menu.className = "inactive";
    menu.classList.add("navbar");
    menu.textContent = "Menu";
    const contact = document.createElement("div");
    contact.setAttribute("id","contact");
    contact.className = "inactive";
    contact.classList.add("navbar");
    contact.textContent = "Contact";

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);

    maincontent.appendChild(navbar);
    maincontent.appendChild(loadhome());

    return maincontent;
}

export { initialload }