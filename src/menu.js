
function menuPage() {
    document.body.innerHTML = "";

    const main = document.createElement("main");
    const foodMenuDiv = document.createElement("div");
    foodMenuDiv.id = "food-menu";

    const menuTitleDiv = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = "Menu";
    menuTitleDiv.appendChild(title);

    const foodItemDiv = document.createElement("div");
    foodItemDiv.id = "food-items";

    const foodTitle1 = document.createElement("h5");
    foodTitle1.textContent = "Food 1";
    foodTitle1.classList.add("food");

    const foodTitle2 = document.createElement("h5");
    foodTitle2.textContent = "Food 2";
    foodTitle2.classList.add("food");

    const foodTitle3 = document.createElement("h5");
    foodTitle3.textContent = "Food 3";
    foodTitle3.classList.add("food");

    const foodDescription1 = document.createElement("p");
    foodDescription1.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad aspernatur dignissimos dolor ea, eos magnam.";
    foodDescription1.classList.add("food");

    const foodDescription2 = document.createElement("p");
    foodDescription2.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad aspernatur dignissimos dolor ea, eos magnam.";
    foodDescription2.classList.add("food");

    const foodDescription3 = document.createElement("p");
    foodDescription3.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad aspernatur dignissimos dolor ea, eos magnam.";
    foodDescription3.classList.add("food");

    const hardRule1 = document.createElement("hr");
    const hardRule2 = document.createElement("hr");
    const hardRule3 = document.createElement("hr");
    foodItemDiv.append(foodTitle1, foodDescription1, hardRule1);
    foodItemDiv.append(foodTitle2, foodDescription2, hardRule2);
    foodItemDiv.append(foodTitle3, foodDescription3, hardRule3);
    foodMenuDiv.append(menuTitleDiv, foodItemDiv);
    main.appendChild(foodMenuDiv);

    return main
}



export {menuPage};