import React from 'react';
import MachineForm from '../components/MachineForm';

const MachineCreatePage = () => {
  return (
    <div>
      <h1>Create Machine</h1>
      <MachineForm formType="create" />
    </div>
  );
};

export default MachineCreatePage;