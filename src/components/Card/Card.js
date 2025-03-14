import { formatDate } from "../../utils/formatDate";
import { getOppositeColor } from "../../utils/getOppositeColor";
import { Button } from "../Button/Button";
import { Camera, Heart } from "../CameraHeart/CameraHeart";
import "./Card.css";

export default function Card(imageData){
    const cardContainer = document.createElement("li");
    cardContainer.className = "card";

    const image = document.createElement("img");
    image.src = imageData.urls.small;
    image.className = "card-image";

    const divImageOwner = document.createElement("div");
    divImageOwner.className = "div-owner";
    divImageOwner.style = imageData.color;

    const imageOwner = document.createElement("img");
    imageOwner.src = imageData.user.profile_image.large;
    imageOwner.className = "image-owner";
    imageOwner.style.borderColor = getOppositeColor(imageData.color);


    const ownerInfo = document.createElement("div");
    ownerInfo.className = "owner-info";

    const ownerName = document.createElement("p");
    ownerName.className = "owner-name";
    ownerName.textContent = `${imageData.user.first_name} ${imageData.user.last_name}`

    const updateDate = document.createElement("p");
    updateDate.className = "update-date";
    updateDate.textContent = `📤 ${formatDate(imageData.created_at)}`

    const camera = Camera(imageData);
    const heart = Heart(imageData);
    const button = Button(imageData);


    

    ownerInfo.append(ownerName, updateDate)
    cardContainer.append(image, imageOwner, ownerInfo, camera, heart, button)

    return cardContainer

}
