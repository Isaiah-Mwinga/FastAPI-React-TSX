import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MachinesPage from './pages/MachinesPage';
import MachineEditPage from './pages/MachineEditPage';
import MachineCreatePage from './pages/MachineCreatePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MachinesPage} />
        <Route path="/machines/:machineId/edit" component={MachineEditPage} />
        <Route path="/machines/create" component={MachineCreatePage} />
      </Switch>
    </Router>
  );
};

export default App;