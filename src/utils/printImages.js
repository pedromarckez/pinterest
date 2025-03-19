import Card from "../components/Card/Card";
import fetchApi from "./fetchApi";



export default async function printImages(query){
    const homeContainer = document.querySelector(".images-container");
    
    if(homeContainer) homeContainer.innerHTML = "";

    try {
        const result = await fetchApi(query);

        result.forEach(image => {
            const newcard = Card(image);

            homeContainer.appendChild(newcard);
            
        });

    } catch (error) {
        console.log(error)
    }
}