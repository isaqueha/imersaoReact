import URL_BACKEND from '../config';

const URL_CATEGORIES = `${URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }

      throw new Error('Not possible to fetch data :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
