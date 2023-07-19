import React, { useState } from 'react';

const MachineForm = ({ formType, rawData }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to API
    console.log('Form data:', formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{formType === 'create' ? 'Create Machine' : 'Edit Machine'}</h2>
      {/* Render form fields dynamically based on schema */}
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description || ''}
          onChange={handleChange}
        />
      </div>
      {/* Render more form fields based on schema */}
      <button type="submit">{formType === 'create' ? 'Create' : 'Save'}</button>
    </form>
  );
};

export default MachineForm;