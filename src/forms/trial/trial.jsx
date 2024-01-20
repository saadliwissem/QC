import React, { useState } from 'react';

const Form = ({ generatePdf }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // add more form fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePdf(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      {/* add more input fields as needed */}
      <button type="submit">Generate PDF</button>
    </form>
  );
};

export default Form;
