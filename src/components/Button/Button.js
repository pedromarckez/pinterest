import { cards } from "../../data/cards";
import "./Button.css";

export const Button = (card) => { 
    const cards = card;
    const url = document.createElement("a");
    url.href = card.urlAction;
    url.classList.add("commom_button");
    url.textContent = `Visitar`;

    return url; 
}