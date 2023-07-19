import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MachinesPage from './pages/MachinesPage';
import MachineEditPage from './pages/MachineEditPage';
import MachineCreatePage from './pages/MachineCreatePage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Use the `element` prop to specify the component or element for each route */}
        <Route path="/" element={<MachinesPage />} />
        <Route path="/machines/:machineId/edit" element={<MachineEditPage />} />
        <Route path="/machines/create" element={<MachineCreatePage />} />
      </Routes>
    </Router>
  );
};

export default App;