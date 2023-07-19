import React from 'react';
import { useParams } from 'react-router-dom';
import MachineForm from '../components/MachineForm';
import { useEffect, useState } from 'react';

const MachineEditPage = () => {
  const { machineId } = useParams();
  const [rawMachineData, setRawMachineData] = useState(null);

  useEffect(() => {
    const fetchMachineData = async () => {
      try {
        // Make the API call to fetch the raw machine data based on machineId
        const response = await fetch(`/api/machines/${machineId}`);
        const data = await response.json();

        // Set the fetched data in the state
        setRawMachineData(data);
      } catch (error) {
        console.error('Error fetching raw machine data:', error);
      }
    };

    fetchMachineData();
  }, [machineId]);

  return (
    <div>
      <h1>Edit Machine</h1>
      {rawMachineData ? (
        <MachineForm formType="edit" rawData={rawMachineData} />
      ) : (
        <p>Loading machine data...</p>
      )}
    </div>
  );
};

export default MachineEditPage;