import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import gamesRepository from '../../../repositories/games';
import categoriesRepository from '../../../repositories/categories';
import ButtonLink from '../../../components/ButtonLink';

function RegisterGame() {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ name }) => name);
  const initialData = {
    name: '',
    url: '',
    category: '',
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

  const isEditMode = () => games.find((game) => game.id === values.id);

  return (
    <PageDefault>
      <Link to="/register/category">
        Register Category
      </Link>

      <h1>
        Game Registration
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        const objectAffected = {
          name: values.name,
          url: values.url,
          category: values.category,
          gameId: values.id,
        };

        if (isEditMode()) {
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
          {isEditMode() ? (
            <>
              {' '}
              UPDATE
            </>
          ) : (
            <>
              {' '}
              REGISTER
            </>
          )}
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
            <ButtonLink onClick={() => handleEdit(game)}>
              Edit
            </ButtonLink>
            <ButtonLink onClick={() => handleDelete(game)}>
              Delete
            </ButtonLink>
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default RegisterGame;
