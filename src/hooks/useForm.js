import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    handleChange,
    values,
    setValues,
    clearForm,
  };
}

export default useForm;
