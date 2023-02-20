import "./styles/header.css";
import { showSidebar } from "./sidebar";
import { showAbout } from "./about";
import { showHome } from "./home";
import { showMenu } from "./menu";
export default function header() {
    const header = document.createElement("header");
    const homeLink = document.createElement("a");
    const menuLink = document.createElement("a");
    const aboutLink = document.createElement("a");
    const openSideBarBtn = document.createElement("a");

    homeLink.textContent = "HOME";
    menuLink.textContent = "MENU";
    aboutLink.textContent = "ABOUT";

    homeLink.onclick = () => {
        homeLink.classList.add("active");
        menuLink.classList.remove("active");
        aboutLink.classList.remove("active");
        showHome();
    };
    menuLink.onclick = () => {
        homeLink.classList.remove("active");
        menuLink.classList.add("active");
        aboutLink.classList.remove("active");
        showMenu();
    };
    aboutLink.onclick = () => {
        homeLink.classList.remove("active");
        menuLink.classList.remove("active");
        aboutLink.classList.add("active");
        showAbout();
    };

    header.classList.add("header");
    homeLink.classList.add("header-link", "active");
    menuLink.classList.add("header-link");
    aboutLink.classList.add("header-link");

    openSideBarBtn.onclick = () => showSidebar();
    openSideBarBtn.setAttribute("id", "open-sidebar");
    openSideBarBtn.appendChild(document.createElement("div"));
    openSideBarBtn.appendChild(document.createElement("div"));
    openSideBarBtn.appendChild(document.createElement("div"));

    header.appendChild(openSideBarBtn);
    header.appendChild(homeLink);
    header.appendChild(menuLink);
    header.appendChild(aboutLink);
    return header;
}
