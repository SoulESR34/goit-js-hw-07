import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  galleryContainer.insertAdjacentHTML(
    "beforeend",
    `
        <li class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img
                    class="gallery__image"
                    src="${image.preview}"
                    data-source="large-image.jpg"
                    alt="Image description"
                />
            </a>
        </li>
    `
    );
});

const anchorImages = document.querySelectorAll(".gallery__link");

anchorImages.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const anchorHref = anchor.getAttribute("href");
        const imgGalleryItems = galleryItems.find(
            (element) => element.original === anchorHref
        );
        const bigImage = basicLightbox.create(
            `<img src="${imgGalleryItems.original}" width="800" heigth="60">`
        );
        bigImage.show();

        document.addEventListener('keydown', e =>{
            if(e.key === 'Escape'){
                bigImage.close();
            }
        })
    });
});


