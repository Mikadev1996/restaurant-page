import './style.css';
import {footer, body, navBar} from "./home";
import {menuPage} from "./menu";
import {contactPage} from "./contact";

let state = "home";

const content = document.querySelector("#content");
content.appendChild(navBar());
content.appendChild(body());
content.appendChild(footer());

const home  = document.getElementById("home");
home.onclick = openHome;

const menu = document.getElementById("menu");
menu.onclick = openMenu;

const contact = document.getElementById("contact");
contact.onclick = openContact;

function openHome() {
    if (state !== "home") {
        document.body.innerHTML = "";
        console.log("home");
        document.body.append(navBar(),body(), footer());

        state = "home";
        const menu = document.getElementById("menu");
        menu.onclick = openMenu;

        const contact = document.getElementById("contact");
        contact.onclick = openContact;
    }
}

function openMenu() {
    if (state !== "menu") {
        console.log("menu");
        document.body.append(navBar(), menuPage(), footer());


        state = "menu";
        const home  = document.getElementById("home");
        home.onclick = openHome;

        const contact = document.getElementById("contact");
        contact.onclick = openContact;
    }
}

function openContact() {
    if (state !== "contact") {

        console.log("contact");
        state = "contact";
        document.body.append(navBar(), contactPage(), footer());

        const menu = document.getElementById("menu");
        menu.onclick = openMenu;

        const home  = document.getElementById("home");
        home.onclick = openHome;
    }
}