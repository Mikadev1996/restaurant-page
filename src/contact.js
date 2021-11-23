
function contactPage() {
    document.body.innerHTML = "";
    const main = document.createElement("main");

    const contactDiv = document.createElement("div");
    contactDiv.id = "contact-div";

    const contactTitle = document.createElement("h4");
    contactTitle.textContent = "Contact";

    const detailsDiv = document.createElement("div");
    const address = document.createElement("p");
    const name = document.createElement("p");
    const number = document.createElement("p");

    address.textContent = "Address:"
    name.textContent = "Name:"
    number.textContent = "Number:"

    address.classList.add("detail");
    name.classList.add("detail");
    number.classList.add("detail");

    const hardRule1 = document.createElement("hr");
    const hardRule2 = document.createElement("hr");
    const hardRule3 = document.createElement("hr");

    detailsDiv.append(address, hardRule1, name, hardRule2, number, hardRule3);
    contactDiv.append(contactTitle, detailsDiv);
    main.appendChild(contactDiv);

    return main;
}

export {contactPage}