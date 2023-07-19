import MachineForm from '../components/MachineForm';

const MachineCreatePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Create Machine</h1>
        <MachineForm formType="create" rawData={undefined} />
      </div>
    </div>
  );
};

export default MachineCreatePage;