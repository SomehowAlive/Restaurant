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
        setActiveLink("HOME");

        showHome();
    };
    menuLink.onclick = () => {
        setActiveLink("MENU");
        showMenu();
    };
    aboutLink.onclick = () => {
        setActiveLink("ABOUT");
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

export function setActiveLink(txt) {
    document.querySelectorAll(".header-link").forEach((link) => {
        if (link.textContent === txt) link.classList.add("active");
        else link.classList.remove("active");
    });
}
