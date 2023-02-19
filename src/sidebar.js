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
    homeLink.classList.add("link", "active");
    menuLink.classList.add("link");
    aboutLink.classList.add("link");

    hideSideBarBtn.appendChild(document.createElement("div"));
    hideSideBarBtn.appendChild(document.createElement("div"));
    hideSideBarBtn.appendChild(document.createElement("div"));

    hideSideBarBtn.onclick = () => hideSidebar();

    homeLink.textContent = "HOME";
    menuLink.textContent = "MENU";
    aboutLink.textContent = "ABOUT";

    homeLink.onclick = () => {
        showHome();
        homeLink.classList.add("active");
        menuLink.classList.remove("active");
        aboutLink.classList.remove("active");
        hideSidebar();
    };

    menuLink.onclick = () => {
        showMenu();
        menuLink.classList.add("active");
        homeLink.classList.remove("active");
        aboutLink.classList.remove("active");
        hideSidebar();
    };

    aboutLink.onclick = () => {
        showAbout();
        aboutLink.classList.add("active");
        homeLink.classList.remove("active");
        menuLink.classList.remove("active");
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

export { sidebar, showSidebar, hideSidebar };
