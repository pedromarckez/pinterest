import "./NavLink.css";

export const NavLink = ({ path, text }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    li.classList.add("navLink");
    a.href = path;
    a.textContent = text;

   

    li.append(a);
    

    return li
}



