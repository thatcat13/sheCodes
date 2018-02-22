import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      Ina! Izzy! Wooo!
      <Switch>
        <Route exact path='/' />
      </Switch>

    </div>
  );
}

export default App;
