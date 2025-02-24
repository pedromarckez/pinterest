import "./Search.css";
import { CategoriesData } from "../../data/categories";

export const searchTool = () => {
    const input = document.createElement("input");
    const div = document.createElement("div");

    input.placeholder = "🔎 Buscar";
    input.type = "text";
    input.classList.add("search");

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const searchTerm = event.target.value.trim().toLowerCase();

            
            let results = CategoriesData.filter(category => category.key.includes(searchTerm));

            
            if (results.length === 0) {
                alert("No se encontraron resultados. Sugerencia: Prueba con viaje, deporte, graffiti o animales.");
                
                results = CategoriesData.filter(category => category.key.includes("gatos"));
            }

           
            const searchEvent = new CustomEvent('search', { detail: results });
            window.dispatchEvent(searchEvent);

            event.target.value = ''; 
        }
    });

    div.append(input);
    return input;
}




