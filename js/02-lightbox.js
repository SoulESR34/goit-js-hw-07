import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  galleryContainer.insertAdjacentHTML(
    "beforeend",
    `
    <li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="Image description" />
        </a>
    </li>
    `
    );  
});

const anchorImages = document.querySelectorAll(".gallery__link");

anchorImages.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        let lightbox = new SimpleLightbox('.gallery a', {
            captionsData:"alt",
            captionDelay: 250, 
            captionPosition: "bottom",
        });
    });
});