import "./User.css";

export const User = (src, text) => {
    const li = document.createElement("li");
    const img = document.createElement("img");

    img.src = src;
    img.alt = text;

    li.classList.add("userIcons")

    li.append(img);

    return li
}