import "./CameraHeart.css";


export const Camera = (imageData) => {
    
    const camera = document.createElement("div");
    const icon = document.createElement("img");
    const number = document.createElement("p");

    camera.classList.add("camera");

    icon.src = "./public/assets/icons/camara.png"
    number.textContent = imageData.user.total_collections;


    camera.append(icon, number);

    return camera;

};

export const Heart = (imageData) => {
    
    const heart = document.createElement("div");
    const icon = document.createElement("img");
    const number = document.createElement("p");

    heart.classList.add("heart");

    icon.src = "./public/assets/icons/corazon.png";
    number.textContent = imageData.likes;

    heart.append(icon, number);

    return heart
};

