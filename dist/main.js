(()=>{"use strict";function t(){const t=document.createElement("div");t.setAttribute("id","mainbody"),t.classList.add("wipe");const e=document.createElement("img");e.setAttribute("id","storefront"),e.src="./images/do-nhu--CC1HQ0O8YY-unsplash.jpg",e.height="275",e.width="275",e.alt="Store Front";const n=document.createElement("div");n.setAttribute("id","mainbodydetails"),n.textContent="Voted World's Best Cookie",t.appendChild(e),t.appendChild(n),document.querySelector("#maincontent").appendChild(t)}!function(){const e=document.querySelector("#content");e.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","header");const e=document.createElement("div");return e.setAttribute("id","heading"),e.textContent="Cook's Cookies",t.appendChild(e),t}()),e.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","maincontent");const e=document.createElement("nav");e.setAttribute("id","navbar");const n=document.createElement("div");n.setAttribute("id","home"),n.className="active",n.classList.add("navbar"),n.textContent="Home";const d=document.createElement("div");d.setAttribute("id","menu"),d.className="inactive",d.classList.add("navbar"),d.textContent="Menu";const i=document.createElement("div");return i.setAttribute("id","contact"),i.className="inactive",i.classList.add("navbar"),i.textContent="Contact",e.appendChild(n),e.appendChild(d),e.appendChild(i),t.appendChild(e),t}()),t()}(),document.querySelectorAll(".navbar").forEach((e=>{e.addEventListener("click",(function(){const n=document.querySelector(".active");var d;n.id!=e.id&&(n.classList.remove("active"),n.classList.add("inactive"),e.classList.remove("inactive"),e.classList.add("active"),document.querySelector(".wipe").remove(),"home"==(d=e.id)?t():"menu"==d?function(){const t=document.querySelector("#maincontent"),e=document.createElement("div");e.setAttribute("id","mainmenu"),e.classList.add("wipe");const n=document.createElement("div");n.setAttribute("id","menu1"),n.classList.add("menucard");const d=document.createElement("div");d.setAttribute("id","menu2"),d.classList.add("menucard");const i=document.createElement("div");i.setAttribute("id","title1"),i.classList.add("title"),i.textContent="One Cookie";const c=document.createElement("div");c.setAttribute("id","title2"),c.classList.add("title"),c.textContent="Baker's Dozen";const a=document.createElement("img");a.setAttribute("id","pic1"),a.classList.add("pic"),a.src="./images/ariana-suarez-W1Q6TAotxfY-unsplash.jpg",a.height="188",a.width="282",a.alt="One Cookie";const s=document.createElement("img");s.setAttribute("id","pic2"),s.classList.add("pic"),s.src="./images/sj-YDvfndOs4IQ-unsplash.jpg",s.height="188",s.width="282",s.alt="Baker's Dozen";const o=document.createElement("div");o.setAttribute("id","desc1"),o.classList.add("desc"),o.textContent="Our Award Winning Cookie";const l=document.createElement("div");l.setAttribute("id","desc2"),l.classList.add("desc"),l.textContent="One for the Road";const r=document.createElement("div");r.setAttribute("id","price1"),r.classList.add("price"),r.textContent="$1.00";const m=document.createElement("div");m.setAttribute("id","price2"),m.classList.add("price"),m.textContent="$12.00",n.appendChild(i),n.appendChild(a),n.appendChild(o),n.appendChild(r),d.appendChild(c),d.appendChild(s),d.appendChild(l),d.appendChild(m),e.appendChild(n),e.appendChild(d),t.appendChild(e)}():"contact"==d&&function(){const t=document.querySelector("#maincontent"),e=document.createElement("div");e.setAttribute("id","maincontact"),e.classList.add("wipe");const n=document.createElement("div");n.setAttribute("id","address"),n.classList.add("contactbox");const d=document.createElement("div");d.setAttribute("id","phone"),d.classList.add("contactbox");const i=document.createElement("div");i.setAttribute("id","email"),i.classList.add("contactbox");const c=document.createElement("img");c.setAttribute("id","addressicon"),c.classList.add("icon"),c.src="./images/map-marker.png",c.alt="Address Icon";const a=document.createElement("img");a.setAttribute("id","phoneicon"),a.classList.add("icon"),a.src="./images/phone-in-talk.png",a.alt="Phone Icon";const s=document.createElement("img");s.setAttribute("id","emailicon"),s.classList.add("icon"),s.src="./images/email.png",s.alt="Email Icon";const o=document.createElement("div");o.setAttribute("id","addresstitle"),o.classList.add("contacttitle"),o.textContent="Address";const l=document.createElement("div");l.setAttribute("id","phonetitle"),l.classList.add("contacttitle"),l.textContent="Phone";const r=document.createElement("div");r.setAttribute("id","emailtitle"),r.classList.add("contacttitle"),r.textContent="Email";const m=document.createElement("div");m.setAttribute("id","addressbody"),m.classList.add("contactbody"),m.textContent="123 Main St.";const u=document.createElement("div");u.setAttribute("id","phonebody"),u.classList.add("contactbody"),u.textContent="(123) 456-7890";const p=document.createElement("div");p.setAttribute("id","emailbody"),p.classList.add("contactbody"),p.textContent="cookscookies@email.com",n.appendChild(c),n.appendChild(o),n.appendChild(m),d.appendChild(a),d.appendChild(l),d.appendChild(u),i.appendChild(s),i.appendChild(r),i.appendChild(p),e.appendChild(n),e.appendChild(d),e.appendChild(i),t.appendChild(e)}())}))}))})();