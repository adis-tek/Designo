import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <h1>Initial Commit</h1>
      <h1>On Develop Branch</h1>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
