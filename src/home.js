import "./styles/home.css";

export default function home() {
    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero-container");
    const heroText = document.createElement("h1");
    heroText.textContent = "When you want classy food you come to the CLASSY RESTAURANT";
    heroText.classList.add("hero-text");
    const heroBtnCont = document.createElement("a");
    heroBtnCont.classList.add("hero-btn-cont");
    const herobtn = document.createElement("button");
    herobtn.textContent = "";
    herobtn.classList.add("hero-btn");
    heroBtnCont.appendChild(herobtn);
    heroContainer.appendChild(heroText);
    heroContainer.appendChild(heroBtnCont);
    return heroContainer;
}
