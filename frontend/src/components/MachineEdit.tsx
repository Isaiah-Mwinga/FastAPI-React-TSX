import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface MachineData {
  id: number;
  name: string;
  location: string;
  email: string;
}

function MachineEdit() {
  const { id } = useParams<{ id: string }>();
  const [machineData, setMachineData] = useState<MachineData>({ id: 0, name: '', location: '', email: '' });

  useEffect(() => {
    fetchMachine();
  }, []);

  const fetchMachine = async () => {
    try {
      const response = await axios.get<MachineData[]>(`http://localhost:8000/machine/get?id=${id}`);
      setMachineData(response.data[0]);
    } catch (error) {
      console.error('Error fetching machine:', error);
    }
  };

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
      await axios.put(`http://localhost:8000/machine/update?machine_id=${id}`, machineData);
      alert('Machine updated successfully!');
    } catch (error) {
      console.error('Error updating machine:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Machine</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
        {/* Add other fields here */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default MachineEdit;