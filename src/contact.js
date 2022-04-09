function loadcontact(){
    const maincontent = document.querySelector("#maincontent");

    const maincontact = document.createElement("div");
    maincontact.setAttribute("id","maincontact");
    maincontact.classList.add("wipe");

    const address = document.createElement("div");
    address.setAttribute("id","address");
    address.classList.add("contactbox");

    const phone = document.createElement("div");
    phone.setAttribute("id","phone");
    phone.classList.add("contactbox");

    const email = document.createElement("div");
    email.setAttribute("id","email");
    email.classList.add("contactbox");

    const addressicon = document.createElement("img");
    addressicon.setAttribute("id","addressicon");
    addressicon.classList.add("icon");
    addressicon.src = "./images/map-marker.png";
    addressicon.alt = "Address Icon";

    const phoneicon = document.createElement("img");
    phoneicon.setAttribute("id","phoneicon");
    phoneicon.classList.add("icon");
    phoneicon.src = "./images/phone-in-talk.png";
    phoneicon.alt = "Phone Icon";

    const emailicon = document.createElement("img");
    emailicon.setAttribute("id","emailicon");
    emailicon.classList.add("icon");
    emailicon.src = "./images/email.png";
    emailicon.alt = "Email Icon";

    const addresstitle = document.createElement("div");
    addresstitle.setAttribute("id","addresstitle");
    addresstitle.classList.add("contacttitle");
    addresstitle.textContent="Address";

    const phonetitle = document.createElement("div");
    phonetitle.setAttribute("id","phonetitle");
    phonetitle.classList.add("contacttitle");
    phonetitle.textContent="Phone";

    const emailtitle = document.createElement("div");
    emailtitle.setAttribute("id","emailtitle");
    emailtitle.classList.add("contacttitle");
    emailtitle.textContent="Email";

    const addressbody = document.createElement("div");
    addressbody.setAttribute("id","addressbody");
    addressbody.classList.add("contactbody");
    addressbody.textContent="123 Main St.";

    const phonebody = document.createElement("div");
    phonebody.setAttribute("id","phonebody");
    phonebody.classList.add("contactbody");
    phonebody.textContent="(123) 456-7890";

    const emailbody = document.createElement("div");
    emailbody.setAttribute("id","emailbody");
    emailbody.classList.add("contactbody");
    emailbody.textContent="cookscookies@email.com";

    address.appendChild(addressicon);
    address.appendChild(addresstitle);
    address.appendChild(addressbody);

    phone.appendChild(phoneicon);
    phone.appendChild(phonetitle);
    phone.appendChild(phonebody);

    email.appendChild(emailicon);
    email.appendChild(emailtitle);
    email.appendChild(emailbody);

    maincontact.appendChild(address);
    maincontact.appendChild(phone);
    maincontact.appendChild(email);

    maincontent.appendChild(maincontact);
}

export { loadcontact }