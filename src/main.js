import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getRequest } from './js/pixabay-api.js';
import { showImages } from './js/render-functions.js';

export const loading = document.querySelector('.loading');
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  loading.classList.add('loader');
  const searchValue = event.target.elements.search.value;

  if (searchValue === '') {
    return;
  } else {
    const promise = getRequest(searchValue);
    showImages(promise);
  }
  form.reset();
});
