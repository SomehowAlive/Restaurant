import "./styles/header.css";
import { showSidebar } from "./sidebar";

export default function header() {
    const header = document.createElement("header");
    header.classList.add("header");
    const openSideBarBtn = document.createElement("a");
    openSideBarBtn.onclick = () => showSidebar();
    openSideBarBtn.setAttribute("id", "open-sidebar");
    openSideBarBtn.appendChild(document.createElement("div"));
    openSideBarBtn.appendChild(document.createElement("div"));
    openSideBarBtn.appendChild(document.createElement("div"));
    header.appendChild(openSideBarBtn);
    return header;
}
