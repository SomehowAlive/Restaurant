import "./styles/sidebar.css";
import { showMenu } from "./menu";
import { showHome } from "./home";
import { showAbout } from "./about";
export default function sidebar() {
    const sideBar = document.createElement("div");
    const hideSideBarBtn = document.createElement("a");
    const homeLink = document.createElement("a");
    const menuLink = document.createElement("a");
    const aboutLink = document.createElement("a");

    sideBar.classList.add("sidebar");
    sideBar.classList.add("hidden");
    hideSideBarBtn.classList.add("hide-sidebar");
    homeLink.classList.add("sidebar-link", "active");
    menuLink.classList.add("sidebar-link");
    aboutLink.classList.add("sidebar-link");

    hideSideBarBtn.appendChild(document.createElement("div"));
    hideSideBarBtn.appendChild(document.createElement("div"));
    hideSideBarBtn.appendChild(document.createElement("div"));

    hideSideBarBtn.onclick = () => hideSidebar();

    homeLink.textContent = "HOME";
    menuLink.textContent = "MENU";
    aboutLink.textContent = "ABOUT";

    homeLink.onclick = () => {
        setActiveLink("HOME");
        showHome();
        hideSidebar();
    };

    menuLink.onclick = () => {
        setActiveLink("MENU");
        showMenu();
        hideSidebar();
    };

    aboutLink.onclick = () => {
        setActiveLink("ABOUT");
        showAbout();
        hideSidebar();
    };

    sideBar.appendChild(hideSideBarBtn);
    sideBar.appendChild(homeLink);
    sideBar.appendChild(menuLink);
    sideBar.appendChild(aboutLink);

    return sideBar;
}

function showSidebar() {
    document.querySelector(".sidebar").classList.remove("hidden");
}

function hideSidebar() {
    document.querySelector(".sidebar").classList.add("hidden");
}

function setActiveLink(txt) {
    document.querySelectorAll(".sidebar-link").forEach((link) => {
        if (link.textContent === txt) link.classList.add("active");
        else link.classList.remove("active");
    });
}

export { sidebar, showSidebar, hideSidebar };
