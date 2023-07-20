import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MachineList from './components/MachineList';
import MachineCreate from './components/MachineCreate';
import MachineEdit from './components/MachineEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/machines" element={<MachineList />} />
        <Route  path="/machines/create" element={<MachineCreate />} />
        <Route  path="/machines/:id/edit" element={<MachineEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
