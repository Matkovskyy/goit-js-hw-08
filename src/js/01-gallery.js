// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const blockGallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

blockGallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
blockGallery.addEventListener('click', handleGalleryContainer)

function createGalleryItems(elements) {
    return elements.map(({ preview, original, description }) => {
       return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-src="${original}" 
      alt=${description}
    />
  </a>
</div>`
    }).join("")
};
const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  fadeSpeed: 200,
  maxZoom: 2,
  scrollZoomFactor: 0.2,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
