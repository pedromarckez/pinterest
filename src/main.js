

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

// Function to reset to initial state
const resetToInitialState = () => {
    sectionCards.innerHTML = '';
    cards.forEach((card, index) => sectionCards.appendChild(Card(card, index)));
}

// Ensure DOM is fully loaded before adding event listener
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".logo").addEventListener('click', resetToInitialState);

    // Add event listener for search results
    window.addEventListener('search', (event) => {
        const results = event.detail;

        // Filter cards based on search results
        const filteredCards = cards.filter(card => results.some(result => result.key === card.clave));

        // Update sectionCards with filtered cards
        sectionCards.innerHTML = '';
        filteredCards.forEach((card, index) => sectionCards.appendChild(Card(card, index)));
    });
});
