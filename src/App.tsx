import React from 'react';
import './App.css';
import Home from './Home';
import Comics from './Comics';
import Comic from './Comic';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Chris C Cerami
        </header>
        <div className="main-content">
          <Switch>
            <Route path="/comics/:title/:page">
              <Comic/>
            </Route>
            <Route path="/comics">
              <Comics/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
