import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';
import ButtonLink from '../../../components/ButtonLink';

function CategoryRegistration() {
  const [categories, setCategories] = useState([]);
  const initialData = {
    name: '',
    description: '',
    color: '',
  };

  const {
    handleChange, values, setValues, clearForm,
  } = useForm(initialData);

  const reloadList = () => {
    categoriesRepository
      .getAll()
      .then((res) => {
        setCategories(res);
      });
  };

  useEffect(() => {
    reloadList();
  }, []);

  const handleEdit = (category) => {
    clearForm();
    setValues(category);
  };

  const handleDelete = (category) => {
    categoriesRepository.remove(category.id)
      .then(() => {
        reloadList();
      });
  };

  const isEditMode = () => categories.find((category) => category.id === values.id);

  return (
    <PageDefault>
      <Link to="/register/game">
        Register Game
      </Link>

      <h1>
        Category Registration
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        if (isEditMode()) {
          categoriesRepository.update(values)
            .then(() => {
              console.log('Updated successfully!');
              reloadList();
            });
        } else {
          categoriesRepository.create(values)
            .then(() => {
              console.log('Registered successfully!');
              reloadList();
            });
        }
        clearForm();
      }}
      >

        <FormField
          label="Category Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
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

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
            <ButtonLink onClick={() => handleEdit(category)}>
              Edit
            </ButtonLink>
            <ButtonLink onClick={() => handleDelete(category)}>
              Delete
            </ButtonLink>
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CategoryRegistration;
