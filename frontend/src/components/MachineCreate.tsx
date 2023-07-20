import React, { useState } from 'react';
import axios from 'axios';

interface MachineData {
  name: string;
  location: string;
  email: string;
  number: number;
  float_number: number;
  enum: string;
  password: string;
}

function MachineCreate() {
  const [machineData, setMachineData] = useState<MachineData>({
    name: '',
    location: '',
    email: '',
    number: 0,
    float_number: 0,
    enum: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMachineData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/machine/create', machineData);
      alert('Machine created successfully!');
      setMachineData({
        name: '',
        location: '',
        email: '',
        number: 0,
        float_number: 0,
        enum: '',
        password: '',
      });
    } catch (error) {
      console.error('Error creating machine:', error);
    }
  };

  return (
    <div className="container flex justify-center mx-auto p-4 ">
      <h2 className=" flex justify-center text-2xl font-bold mb-4">Create Machine</h2>
      <form onSubmit={handleSubmit} className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={machineData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            location:
          </label>
          <input
            type="text"
            name="location"
            value={machineData.location}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            email:
          </label>
          <input
            type="text"
            name="email"
            value={machineData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            number:
          </label>
          <input
            type="number"
            name="number"
            value={machineData.number}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            floatNumber:
          </label>
          <input
            type="number"
            name="float_number"
            value={machineData.float_number}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            enum:
          </label>
          <input
            type="text"
            name="enum"
            value={machineData.enum}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            password:
          </label>
          <input
            type="password"
            name="password"
            value={machineData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Add other fields here */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default MachineCreate;