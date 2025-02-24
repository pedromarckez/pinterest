import "./CameraHeart.css";


export const Camera = (card) => {
    
    const div = document.createElement("div");
    const icon = document.createElement("img");
    const number = document.createElement("p");

    div.classList.add("camera");

    icon.src = "./public/assets/icons/camara.png"
    number.textContent = card.saves;


    div.append(icon, number);

    return div;

};

export const Heart = (card) => {
    
    const div = document.createElement("div");
    const icon = document.createElement("img");
    const number = document.createElement("p");

    div.classList.add("heart");

    icon.src = "./public/assets/icons/corazon.png";
    number.textContent = card.likes;

    div.append(icon, number);

    return div
};

