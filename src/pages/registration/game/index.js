import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import gamesRepository from '../../../repositories/games';
import categoriesRepository from '../../../repositories/categories';

function RegisterGame() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ name }) => name);
  const { handleChange, values } = useForm({
    name: 'Default Game',
    url: 'https://itch.io/embed/696379',
    category: 'Action',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Game Registration</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const chosenCategory = categories.find((category) => category.name === values.category);

        gamesRepository.create({
          name: values.name,
          url: values.url,
          categoryId: chosenCategory.id,
        })
          .then(() => {
            console.log('Registered successfully!');
            history.push('/');
          });
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

      <br />
      <br />

      <Link to="/register/category">
        Register Category
      </Link>
    </PageDefault>
  );
}

export default RegisterGame;
