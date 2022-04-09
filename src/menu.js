function loadmenu(){
    const maincontent = document.querySelector("#maincontent");

    const mainmenu = document.createElement("div");
    mainmenu.setAttribute("id","mainmenu");
    mainmenu.classList.add("wipe");

    const menu1 = document.createElement("div");
    menu1.setAttribute("id","menu1");
    menu1.classList.add("menucard");

    const menu2 = document.createElement("div");
    menu2.setAttribute("id","menu2");
    menu2.classList.add("menucard");

    const title1 = document.createElement("div");
    title1.setAttribute("id","title1");
    title1.classList.add("title");
    title1.textContent = "One Cookie"

    const title2 = document.createElement("div");
    title2.setAttribute("id","title2");
    title2.classList.add("title");
    title2.textContent = "Baker's Dozen";

    const pic1 = document.createElement("img");
    pic1.setAttribute("id","pic1");
    pic1.classList.add("pic");
    pic1.src = "./images/ariana-suarez-W1Q6TAotxfY-unsplash.jpg";
    pic1.height = "188";
    pic1.width = "282";
    pic1.alt = "One Cookie";

    const pic2 = document.createElement("img");
    pic2.setAttribute("id","pic2");
    pic2.classList.add("pic");
    pic2.src = "./images/sj-YDvfndOs4IQ-unsplash.jpg";
    pic2.height = "188";
    pic2.width = "282";
    pic2.alt = "Baker's Dozen";

    const desc1 = document.createElement("div");
    desc1.setAttribute("id","desc1");
    desc1.classList.add("desc");
    desc1.textContent = "Our Award Winning Cookie";

    const desc2 = document.createElement("div");
    desc2.setAttribute("id","desc2");
    desc2.classList.add("desc");
    desc2.textContent = "One for the Road";

    const price1 = document.createElement("div");
    price1.setAttribute("id","price1");
    price1.classList.add("price");
    price1.textContent = "$1.00";

    const price2 = document.createElement("div");
    price2.setAttribute("id","price2");
    price2.classList.add("price");
    price2.textContent = "$12.00";

    menu1.appendChild(title1);
    menu1.appendChild(pic1);
    menu1.appendChild(desc1);
    menu1.appendChild(price1);

    menu2.appendChild(title2);
    menu2.appendChild(pic2);
    menu2.appendChild(desc2);
    menu2.appendChild(price2);

    mainmenu.appendChild(menu1);
    mainmenu.appendChild(menu2);

    maincontent.appendChild(mainmenu);
}

export { loadmenu }