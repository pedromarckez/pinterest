const API_KEY = 'WyXbZ0c23VHZuTc5HBgf0hK3Mojidezxb7Qi_9RCO0o';
const url = 'https://api.unsplash.com/search/photos';

export default async function fetchApi(query) {
    try {
        const response = await fetch(`${url}/?query=${query}&per_page=20&client_id=${API_KEY}`);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const res = await response.json();
        console.log(res)

        if (res.results.length === 0) {
            alert(`No se encontraron resultados para "${query}". Buscando imágenes de gatos como predeterminado.`);
            const fallbackResponse = await fetch(`${url}/?query=Gatos&per_page=20&client_id=${API_KEY}`);

            if (!fallbackResponse.ok) {
                throw new Error(`Error ${fallbackResponse.status}: ${fallbackResponse.statusText}`);
            }

            const fallbackRes = await fallbackResponse.json();
            return fallbackRes.results;
        }

        return res.results;
    } catch (error) {
        console.log("No hemos encontrado lo que buscabas. Te enseñamos estos gatitos como disculpa")
    }
}

