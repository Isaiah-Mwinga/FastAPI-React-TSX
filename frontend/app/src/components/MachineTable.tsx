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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {machines.map((machine) => (
            <tr key={machine.id}>
              <td>{machine.name}</td>
              <td>{machine.description}</td>
              {/* Add more table cells based on machine properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MachineTable;