import React, { useState } from 'react';

const MachineForm = ({ formType, rawData }) => {
  const [formData, setFormData] = useState(rawData || {});

  const handleChange = (event: { 
    target: 
    { 
        name: any;
         value: any; 
        }; }) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Submit logic here
  };

  return (
    <form className=" flex justify-center max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 space-y-4 " onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-700 font-semibold mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="description" className="text-gray-700 font-semibold mb-2">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description || ''}
          onChange={handleChange}
          rows={4}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      
      {/* Additional form fields go here */}
      
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-gold text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300"
        >
          {formType === 'edit' ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
};

export default MachineForm;