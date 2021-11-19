import './style.css';
console.log("webpack setup test");

function component() {
    const element = document.createElement('div');
    element.innerHTML = "Hello";


    return element;
}

document.body.appendChild(component());