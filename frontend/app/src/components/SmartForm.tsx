import React, { useEffect, useState } from 'react';

const SmartForm = ({ topic, formType, rawData }) => {
  const [schema, setSchema] = useState({});

  useEffect(() => {
    const fetchSchema = async () => {
      try {
        const response = await fetch(`/api/${topic}/schema/${formType}`);
        const data = await response.json();
        setSchema(data);
      } catch (error) {
        console.error('Error fetching schema:', error);
      }
    };

    fetchSchema();
  }, [formType, topic]);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission based on formType
  };

  const handleChange = () => {
    // Handle form field changes
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{formType === 'create' ? `Create ${topic}` : `Edit ${topic}`}</h2>
      {/* Render form fields dynamically based on schema */}
      {Object.entries(schema.properties).map(([fieldName, fieldSchema]) => (
        <div key={fieldName}>
          <label htmlFor={fieldName}>{fieldSchema.title}</label>
          <input
            type={fieldSchema.type}
            id={fieldName}
            name={fieldName}
            value={rawData?.[fieldName] || ''}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">{formType === 'create' ? 'Create' : 'Save'}</button>
    </form>
  );
};

export default SmartForm;