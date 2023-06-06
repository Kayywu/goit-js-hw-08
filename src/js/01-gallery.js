// Add imports above this line
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
    const link = document.createElement('a');
    link.classList.add("gallery__link");
    link.setAttribute("href", item.original);

    const image = document.createElement('img');
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.setAttribute("alt", item.description)

    link.append(image);
    gallery.append(link);
});

var lightbox = new simpleLightbox('.gallery .gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});



console.log(galleryItems);
