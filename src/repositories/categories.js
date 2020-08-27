import URL_BACKEND from '../config';

const URL_CATEGORIES = `${URL_BACKEND}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }

      throw new Error('Not possible to fetch data');
    });
}

function getAllWithGames() {
  return fetch(`${URL_CATEGORIES}?_embed=games`)
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }

      throw new Error('Not possible to fetch data');
    });
}

export default {
  getAllWithGames,
  getAll,
};
