import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../img/javascript.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { loading } from '../main.js';

const gallery = document.querySelector('.list-gallery');

export function showImages(promise) {
  promise.then(response =>
    response.json().then(data => {
      if (data.hits.length === 0) {
        loading.classList.remove('loader');
        gallery.innerHTML = '';
        return iziToast
          .show({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            iconUrl: icon,
            color: '#E78E8E',
            messageColor: 'white',
            timeout: 3000,
            imageWidth: 50,
            position: 'topRight',
            maxWidth: 420,
          })
          .catch(error => {
            // Error handling
            console.log(error);
          });
      }
      if (data.hits) {
        loading.classList.remove('loader');
        gallery.innerHTML = data.hits
          .map(element => {
            return `<li class="gallery"><a href="${element.largeImageURL}"><img src="${element.webformatURL}" alt="${element.tags}"></a>
   <div class="deskr-container"> <p>Likes<span>${element.likes}</span></p>
    <p>Views<span>${element.views}</span></p>
    <p>Comments<span>${element.comments}</span></p>
    <p>Downloads<span>${element.downloads}</span></p> </div>
  </li>`;
          })
          .join('');
      }
      const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captions: true,
        captionSelector: 'img',
        captionsData: 'alt',
      });
      lightbox.refresh();
    })
  );
}
