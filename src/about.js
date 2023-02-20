import "./styles/about.css";
export default function about() {
    const aboutContainer = document.createElement("div");
    const aboutTitle = document.createElement("p");
    const aboutCard = document.createElement("div");
    const aboutCardTitle = document.createElement("p");
    const aboutCardPara = document.createElement("p");
    const chefsTitle = document.createElement("p");
    const chefCard = document.createElement("div");
    const chefName = document.createElement("p");
    const chefImg = new Image();
    const chefBio = document.createElement("p");
    const aboutDiv = document.createElement("div");
    const chefsDiv = document.createElement("div");

    aboutContainer.classList.add("about-container");
    aboutTitle.classList.add("about-title", "title");
    aboutCard.classList.add("about-card", "card");
    aboutCardTitle.classList.add("about-card-title", "sub-title");
    aboutCardPara.classList.add("about-card-para", "para");
    chefsTitle.classList.add("chefs-title", "title");
    chefCard.classList.add("chef-card", "card");
    chefName.classList.add("sub-title");
    chefImg.classList.add("chef-img");
    chefBio.classList.add("para", "chef-bio");

    aboutTitle.textContent = "About Us";
    aboutCardTitle.textContent = "The Classy Restaurant";
    aboutCardPara.textContent =
        "the classy restaurant dates back to 1997,it was first created by albert einstein, it has fed many generations of humans, and had the best international chefs work here";
    chefsTitle.textContent = "Our Chefs";
    chefName.textContent = "Gordon Ramsey";
    chefImg.src =
        "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc4MTE4NTMyMDE1OTk2/gordonramsay_kitchenmaster-ftr.jpg";
    chefBio.textContent =
        "chef Gordon is an international chef that has worked in 18 countries, and is now working for the classy restaurant using his 30 years of experience in the kitchen ";

    aboutCard.appendChild(aboutCardTitle);
    aboutCard.appendChild(aboutCardPara);

    chefCard.appendChild(chefImg);
    chefCard.appendChild(chefName);
    chefCard.appendChild(chefBio);

    aboutDiv.appendChild(aboutTitle);
    aboutDiv.appendChild(aboutCard);

    chefsDiv.appendChild(chefsTitle);
    chefsDiv.appendChild(chefCard);

    aboutContainer.appendChild(aboutDiv);
    aboutContainer.appendChild(chefsDiv);

    return aboutContainer;
}

function showAbout() {
    document.querySelector(".hero-container")?.remove();
    document.querySelector(".menu-container")?.remove();
    document.querySelector("#content").appendChild(about());
}

export { showAbout };
