import React from 'react';
import ReactDOM from 'react-dom';
import TilesContainer from './TilesContainer';
import NewUserControl from './NewUserControl';
import { Switch, Route } from 'react-router-dom';


function Home() {
  return (
    <div>
      <style jsx global>{`
        body {
          font: 14px 'Roboto', monospace, sans-serif;
          margin: 20px;
        }
      `}</style>
      <Switch>
        <Route exact path='/' component={TilesContainer} />
        <Route exact path='/signup' component={NewUserControl} />
      </Switch>
    </div>
  );
}

export default Home;
