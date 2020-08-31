import URL_BACKEND from '../config';

const URL_CATEGORIES = `${URL_BACKEND}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }

      throw new Error('Not possible to get data');
    });
}

function getAllWithGames() {
  return fetch(`${URL_CATEGORIES}?_embed=games`)
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }

      throw new Error('Not possible to get data');
    });
}

function create(object) {
  return fetch(`${URL_CATEGORIES}`, {
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

function update(object) {
  return fetch(`${URL_CATEGORIES}/${object.id}`, {
    method: 'PUT',
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
  return fetch(`${URL_CATEGORIES}/${id}`, {
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
  getAllWithGames,
  getAll,
  create,
  update,
  remove,
};
