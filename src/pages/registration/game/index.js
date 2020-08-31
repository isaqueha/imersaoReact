import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import gamesRepository from '../../../repositories/games';
import categoriesRepository from '../../../repositories/categories';

function RegisterGame() {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ name }) => name);
  const initialData = {
    name: 'Default Game',
    url: 'https://itch.io/embed/696379',
    category: 'Action',
  };
  const {
    handleChange, values, setValues, clearForm,
  } = useForm(initialData);

  const reloadList = () => {
    gamesRepository
      .getAll()
      .then((res) => {
        setGames(res);
      });
  };

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
    reloadList();
  }, []);

  const handleEdit = (game) => {
    clearForm();
    setValues(game);
  };

  const handleDelete = (game) => {
    gamesRepository.remove(game.id)
      .then(() => {
        console.log('Deleted successfully!');
        reloadList();
      });
  };

  return (
    <PageDefault>
      <h1>Game Registration</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const objectAffected = {
          name: values.name,
          url: values.url,
          gameId: values.id,
        };

        const isEditMode = games.find((game) => game.id === values.id);

        if (isEditMode) {
          gamesRepository.update(objectAffected)
            .then(() => {
              console.log('Updated successfully!');
              reloadList();
            });
        } else {
          gamesRepository.create(objectAffected)
            .then(() => {
              console.log('Registered successfully!');
              reloadList();
            });
        }

        clearForm();
      }}
      >

        <FormField
          label="Game Title"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Category"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Register
        </Button>
      </form>

      {games.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {games.map((game) => (
          <li key={`${game.name}`}>
            {game.name}
            <Button onClick={() => handleEdit(game)}>
              Edit
            </Button>
            <Button onClick={() => handleDelete(game)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>

      <Link to="/register/category">
        Register Category
      </Link>
    </PageDefault>
  );
}

export default RegisterGame;
