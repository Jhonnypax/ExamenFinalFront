import React from 'react';

const Form = ({ formData, errors, successMessage, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label type="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label type="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <button type="submit">Enviar</button>
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
}

export default Form;