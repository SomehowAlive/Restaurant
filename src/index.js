import "./styles/style.css";
import Header from "./header.js";
import Home from "./home.js";
import Sidebar from "./sidebar.js";

const content = document.createElement("div");
content.setAttribute("id", "content");
content.appendChild(Sidebar());
content.appendChild(Header());
content.appendChild(Home());

document.body.appendChild(content);
