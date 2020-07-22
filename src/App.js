import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import CiInsuranceCalculator from './components/CiInsuranceCalculator';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={CiInsuranceCalculator} />
    </Switch>
  );
}

export default App;
