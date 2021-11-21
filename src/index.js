import './style.css';
import {footer, mainDiv, navBar} from "./mainPage";


const content = document.querySelector("#content");

content.appendChild(navBar());
content.appendChild(mainDiv());
content.appendChild(footer());