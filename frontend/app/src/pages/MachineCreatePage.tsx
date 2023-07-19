import MachineForm from '../components/MachineForm';

const MachineCreatePage = () => {
  return (
    <div>
      <h1>Create Machine</h1>
      <MachineForm formType="create" rawData={null} />
    </div>
  );
};

export default MachineCreatePage;