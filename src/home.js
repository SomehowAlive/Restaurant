import "./styles/home.css";
import { showMenu } from "./menu";

export default function home() {
    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero-container");
    const heroText = document.createElement("h1");
    heroText.textContent = "When you want classy food you come to the classy restaurant";
    heroText.classList.add("hero-text");
    const heroBtn = document.createElement("button");
    heroBtn.classList.add("hero-btn");
    heroBtn.textContent = "⟶";
    heroBtn.classList.add("hero-btn");
    heroBtn.onclick = () => {
        showMenu();
    };
    heroContainer.appendChild(heroText);
    heroContainer.appendChild(heroBtn);
    return heroContainer;
}

function showHome() {
    document.querySelector(".menu-container")?.remove();
    document.querySelector(".about-container")?.remove();
    document.querySelector("#content").appendChild(home());
}

export { showHome };
