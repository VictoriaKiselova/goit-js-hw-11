const API_KEY = '42512841-77167630e6162aef67a2d6614';
const BASE_URL = 'https://pixabay.com/api/';

export function getRequest(q) {
  const LINK = `${BASE_URL}?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(LINK);
}
