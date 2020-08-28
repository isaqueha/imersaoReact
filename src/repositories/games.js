import URL_BACKEND from '../config';

const URL_GAMES = `${URL_BACKEND}/games`;

function getAll() {
  return fetch(`${URL_GAMES}`)
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }

      throw new Error('Not possible to fetch data');
    });
}

function create(object) {
  return fetch(`${URL_GAMES}?_embed=games`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(object),
  })
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }

      throw new Error('Not possible to register data');
    });
}

function remove(id) {
  return fetch(`${URL_GAMES}/${id}`, {
    method: 'delete',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }

      throw new Error('Not possible to delete data');
    });
}

export default {
  getAll,
  create,
  remove,
};
