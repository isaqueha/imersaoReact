import URL_BACKEND from '../config';

const URL_GAMES = `${URL_BACKEND}/games`;

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

export default {
  create,
};
