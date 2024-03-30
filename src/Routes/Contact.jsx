import React, { useState } from 'react';
import Form from '../Components/Form';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    const { name, email } = formData;
    const newErrors = {};

    if (name.trim().length < 5) {
      newErrors.name = 'El nombre debe tener al menos 5 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulario válido:', formData);
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuanto antes vía mail.`);
    } else {
      console.log('Formulario inválido');
    }
  };

  return (
    <div>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y te contactaremos</p>
      <Form
        formData={formData}
        errors={errors}
        successMessage={successMessage}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Contact;