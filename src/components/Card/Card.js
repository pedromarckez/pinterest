import { CategoriesData } from "../../data/categories";
import { Button } from "../Button/Button";
import { Camera, Heart } from "../CameraHeart/CameraHeart";
import "./Card.css";

export const Card = (card) => {

    const category = CategoriesData.find(category => category.key === card.clave);
   
    if (category) {
            const article = document.createElement("article");
            article.classList.add("commom_card");

            const img = document.createElement("img");
            img.classList.add("principal_img");
            img.src = card.img;
            img.alt = card.clave;

            const userPicture = document.createElement("img");
            userPicture.classList.add("user_picture", card.border);
            userPicture.src = card.userPicture;

            const userName = document.createElement("p");
            userName.classList.add("user_name");
            userName.textContent = card.userName;

            const date = document.createElement("p");
            date.classList.add("user_date");
            date.textContent = card.date;

            const heart = Heart(card);
            const camera = Camera(card);
            const button = Button(card);

            article.append(img, userName, userPicture, date, heart, camera, button);
            return article;
        
    }
    return
}

