import { navLinks } from "../../data/navLinks";
import { users } from "../../data/users";
import { NavLink } from "../NavLink/NavLink";
import { searchTool } from "../Search/Search";
import { User } from "../User/User"
import "./Header.css";

export const Header = () => {
    const header = document.createElement("header");
    const app = document.querySelector("#app");

    const logo = document.createElement("img");
    logo.src = "./public/assets/icons/logo-png.png";
    logo.alt = "Icono de Pinterest";
    logo.classList.add("logo");

    const nav = document.createElement("nav");
    const ulNav = document.createElement("ul");
    const divSearch = document.createElement("div");
    const ulUser = document.createElement("ul");

    ulNav.classList.add("ulNav");
    ulUser.classList.add("ulUser");

    const searchInput = searchTool();

    navLinks.forEach((navLink) => ulNav.append(NavLink(navLink)));
    users.forEach((user) => ulUser.append(User(user.src, user.text)));

    header.append(logo, nav, divSearch, ulUser);
    nav.appendChild(ulNav);
    divSearch.appendChild(searchInput);
    app.append(header);
}


