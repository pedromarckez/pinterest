import "./Button.css";

export const Button = (imageData) => { 
    const cards = imageData;
    const url = document.createElement("a");
    url.href = imageData.links.html;
    url.classList.add("commom_button");
    url.textContent = `Visitar`;

    return url; 
}