

import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import { cards } from './data/cards';
import './style.css'

Header();

const app = document.querySelector("#app");

const sectionCards = document.createElement("section");
sectionCards.classList.add("cards");
app.append(sectionCards);

cards.forEach((card, index) => sectionCards.appendChild(Card(card, index)));


const resetToInitialState = () => {
    sectionCards.innerHTML = '';
    cards.forEach((card, index) => sectionCards.appendChild(Card(card, index)));
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".logo").addEventListener('click', resetToInitialState);

    
    window.addEventListener('search', (event) => {
        const results = event.detail;

      
        const filteredCards = cards.filter(card => results.some(result => result.key === card.clave));

        
        sectionCards.innerHTML = '';
        filteredCards.forEach((card, index) => sectionCards.appendChild(Card(card, index)));
    });
});
