import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CategoryRegistration() {
  const initialData = {
    name: '',
    description: '',
    color: '',
  };

  const {
    handleChange, values, setValues, clearForm,
  } = useForm(initialData);

  const [categories, setCategories] = useState([]);
  const URL_CATEGORIES = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categories'
    : 'https://devsoutinhoflix.herokuapp.com/categories';

  useEffect(() => {
    fetch(URL_CATEGORIES)
      .then(async (response) => {
        const res = await response.json();
        setCategories([
          ...res,
        ]);
      });
  }, []);

  const handleEdit = (category) => {
    clearForm();
    setValues(category);
  };

  const handleDelete = (category) => {
    fetch(`${URL_CATEGORIES}/${category.id}`, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(async (response) => {
        const res = await response.json();
        setCategories(categories.filter((item) => item.id !== category.id));
      });
  };

  return (
    <PageDefault>
      <h1>
        Category Registration
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        const isEditMode = categories.find((category) => category.id === values.id);
        const methodMode = isEditMode ? 'put' : 'post';
        const URLbyMode = isEditMode ? `${URL_CATEGORIES}/${values.id}` : URL_CATEGORIES;
        fetch(URLbyMode, {
          method: methodMode,
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then(async (response) => {
            const res = await response.json();
            if (!isEditMode) {
              setCategories([
                ...categories,
                res,
              ]);
            }
          });

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

        <Button>
          Register
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
            <Button onClick={() => handleEdit(category)}>
              Edit
            </Button>
            <Button onClick={() => handleDelete(category)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>

      <Link to="/">
        Return to Home
      </Link>
    </PageDefault>
  );
}

export default CategoryRegistration;
