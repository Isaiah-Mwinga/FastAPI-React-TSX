import React, { useEffect, useState } from 'react';

const MachineTable = () => {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    // Fetch machines data from API
    const fetchMachines = async () => {
      try {
        const response = await fetch('/api/machines');
        const data = await response.json();
        setMachines(data);
      } catch (error) {
        console.error('Error fetching machines:', error);
      }
    };

    fetchMachines();
  }, []);

  return (
    <div>
      <h2>Machines</h2>
      <table className='w-full table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>Description</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {machines.map((machine) => (
            <tr key={machine.id} className="bg-white border-t border-gray-200">
              <td className='px-4 py-2'>{machine.name}</td>
              <td className='px-4 py-2'>{machine.description}</td>
              {/* Add more table cells based on machine properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MachineTable;