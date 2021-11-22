import './style.css';
import {footer, body, navBar} from "./home";
import {menuPage} from "./menu";

let state = "home";

const content = document.querySelector("#content");
content.appendChild(navBar());
content.appendChild(body());
content.appendChild(footer());

const home  = document.getElementById("home");
home.onclick = openHome;

const menu = document.getElementById("menu");
menu.onclick = openMenu;

function openHome() {
    if (state !== "home") {
        document.body.innerHTML = "";
        console.log("home");
        document.body.append(navBar(),body(), footer());

        state = "home";
        const menu = document.getElementById("menu");
        menu.onclick = openMenu;
    }
}

function openMenu() {
    if (state !== "menu") {
        console.log("menu");
        document.body.append(navBar(), menuPage(), footer());


        state = "menu";
        const home  = document.getElementById("home");
        home.onclick = openHome;
    }
}

function openContact() {
    if (state !== "contact") {

    }
}