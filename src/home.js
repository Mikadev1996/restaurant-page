
function navBar() {
    const nav = document.createElement("nav");
    nav.id = "nav-bar";

    const headingDiv = document.createElement("div");
    headingDiv.classList.add("title-div");

    const heading = document.createElement("h1");
    heading.textContent = "Restaurant - Code Spaghetti"

    const pages = document.createElement("div");
    pages.id = "page-bar";

    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    li1.textContent = "Home";
    li1.classList.add("page-list")
    li1.id = "home";

    li2.textContent = "Menu";
    li2.classList.add("page-list")
    li2.id = "menu";

    li3.textContent = "Contact";
    li3.classList.add("page-list")

    ul.append(li1, li2, li3);
    pages.appendChild(ul);

    headingDiv.appendChild(heading);

    nav.appendChild(headingDiv);
    nav.appendChild(pages);

    return nav;
}

function body() {
    const main = document.createElement("main");

    function centre() {
        const imageDiv = document.createElement("div");
        imageDiv.id = "main-img";

        const centre = document.createElement("div");
        centre.id = "centre";

        const centreHeadingMain = document.createElement("h2")
        centreHeadingMain.id = "centre-heading";
        centreHeadingMain.classList.add("main");
        centreHeadingMain.textContent = "Code Amazing Things";

        const centreLorem = document.createElement("p");
        centreLorem.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, culpa deleniti dicta distinctio eius eligendi.";
        centreLorem.classList.add("main");
        centreLorem.id = "description";

        const bookDiv = document.createElement("div");
        bookDiv.classList.add("main");
        const book = document.createElement("button");
        book.id = "book";
        book.textContent = "Book a table";
        bookDiv.appendChild(book);

        centre.append(centreHeadingMain, centreLorem, bookDiv);
        imageDiv.appendChild(centre)

        return imageDiv;
    }

    function info() {
        const info = document.createElement("section");
        info.id = "info";

        const infoDiv = document.createElement("div");
        infoDiv.id = "info-content";

        const headingDiv = document.createElement("div");
        headingDiv.classList.add("info-item");

        const heading = document.createElement("h3");
        heading.textContent = "Bring the best Spaghetti to you, your team, and your company";
        heading.id = "info-title";
        headingDiv.appendChild(heading);

        const infoDescriptionDiv = document.createElement("div");
        infoDescriptionDiv.classList.add("info-item");

        const infoDescription = document.createElement("p");
        infoDescription.textContent = "Relied upon by more than 11 million developers worldwide," +
            " spaghetti is committed to making JavaScript development elegant, productive, and safe. " +
            "The free spaghetti Registry has become the center of JavaScript code sharing," +
            " and with more than one million packages, the largest software registry in the world." +
            " Our other tools and services take the Registry, and the work you do around it, to the next level.";
        infoDescription.id = "info-description";
        infoDescriptionDiv.appendChild(infoDescription);

        infoDiv.append(headingDiv, infoDescriptionDiv);
        info.appendChild(infoDiv);

        return info
    }

    main.append(centre(), info())

    return main;
}

function footer() {
    const footer = document.createElement("footer")
    const footerDiv = document.createElement("div");
    footerDiv.id = "footer-div";

    const gitHub = document.createElement("div");
    gitHub.classList.add("footer-item");
    const link = document.createElement("a");
    link.href= "https://github.com/Mikadev1996";

    const gitHubLogo = document.createElement("img");
    gitHubLogo.id = "github-logo";
    gitHubLogo.src = "https://pngimg.com/uploads/github/github_PNG83.png";
    gitHubLogo.alt = "github";

    link.appendChild(gitHubLogo);
    gitHub.appendChild(link);

    function supportList() {
        const supportListDiv = document.createElement("div");
        supportListDiv.classList.add("footer-item")
        const supportList = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");

        li1.textContent = "Support";
        li1.style.fontWeight = "bold";
        li2.textContent = "Help";
        li3.textContent = "Status";
        li4.textContent = "Contact";


        supportList.append(li1, li2, li3, li4);
        supportListDiv.appendChild(supportList)
        return supportListDiv;
    }

    function policiesList() {
        const policiesListDiv = document.createElement("div");
        policiesListDiv.classList.add("footer-item")
        const policiesList = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");
        const li5 = document.createElement("li");

        li1.textContent = "Terms & Policies";
        li1.style.fontWeight = "bold";
        li2.textContent = "Policies";
        li3.textContent = "Terms of Use";
        li4.textContent = "Code of Conduct";
        li5.textContent = "Privacy";

        policiesList.append(li1, li2, li3, li4, li5);
        policiesListDiv.appendChild(policiesList);
        return policiesListDiv;
    }

    footerDiv.append(gitHub, supportList(), policiesList());
    footer.appendChild(footerDiv);

    return footer;
}

export {navBar, body, footer};