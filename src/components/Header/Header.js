import { navLinks } from "../../data/navLinks";
import { users } from "../../data/users";
import fetchApi from "../../utils/fetchApi";
import printImages from "../../utils/printImages";
import { NavLink } from "../NavLink/NavLink";
import { User } from "../User/User"
import "./Header.css";

export default function Header(){
    const header = document.createElement("header");
    header.className = "header";

    const logo = document.createElement("img");
    logo.className = "logo";
    logo.src = "./public/assets/icons/logo-pinterest.png";
    logo.alt = "Icono de Pinterest";

    const nav = document.createElement("nav");
    nav.className = "nav";

    const ulNav = document.createElement("ul");
    ulNav.className = "ulNav";

    const divSearch = document.createElement("div");
    divSearch.className = "divSearch";

    const ulUser = document.createElement("ul");
    ulUser.className = "ulUser";

    const searchInput = document.createElement("input");
    searchInput.className = "search-input";
    searchInput.placeholder = "🔎 Buscar";

    navLinks.forEach((navLink) => ulNav.append(NavLink(navLink)));
    users.forEach((user) => ulUser.append(User(user.src, user.text)));

    header.append(logo, nav, divSearch, ulUser);
    nav.appendChild(ulNav);
    divSearch.appendChild(searchInput);

    logo.addEventListener("click", () => {
        location.reload(); 
    });

    searchInput.addEventListener("keydown", async (e) => {
        if (e.key === "Enter"){
            await printImages(e.target.value);
        }
    })

    return header
}