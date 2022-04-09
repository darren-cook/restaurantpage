function loadhome() {
    const mainbody = document.createElement("div");
    mainbody.setAttribute("id","mainbody");
    mainbody.classList.add("wipe");

    const storefront = document.createElement("img");
    storefront.setAttribute("id","storefront");
    storefront.src = "./images/do-nhu--CC1HQ0O8YY-unsplash.jpg"
    storefront.height = "275";
    storefront.width = "275";
    storefront.alt = "Store Front";

    const mainbodydetails = document.createElement("div");
    mainbodydetails.setAttribute("id","mainbodydetails");
    mainbodydetails.textContent = "Voted World's Best Cookie";

    mainbody.appendChild(storefront);
    mainbody.appendChild(mainbodydetails);

    const maincontent = document.querySelector("#maincontent");
    maincontent.appendChild(mainbody);
}

export { loadhome }