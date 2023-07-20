import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Machine {
  id: number;
  name: string;
  location: string;
  email: string;
}

function MachineList() {
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    fetchMachines();
  }, []);

  const fetchMachines = async () => {
    try {
      const response = await axios.get<Machine[]>('http://localhost:8000/machine/get');
      setMachines(response.data);
    } catch (error) {
      console.error('Error fetching machines:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Machine List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {machines.map((machine) => (
            <tr key={machine.id}>
              <td className="border px-4 py-2">{machine.id}</td>
              <td className="border px-4 py-2">{machine.name}</td>
              <td className="border px-4 py-2">{machine.location}</td>
              <td className="border px-4 py-2">{machine.email}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/machines/${machine.id}/edit`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MachineList;