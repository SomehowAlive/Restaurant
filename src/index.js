import "./styles/style.css";
import Header from "./header.js";
import Home from "./home.js";
import Sidebar from "./sidebar.js";
import Menu from "./menu.js";

const content = document.createElement("div");
content.setAttribute("id", "content");
content.appendChild(Header());
content.appendChild(Sidebar());
content.appendChild(Home());

document.body.appendChild(content);
