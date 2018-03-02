import React from 'react';
import TilesContainer from './TilesContainer';
import SignUp from './SignUp';
import SignUpControl from './SignUpControl';
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
        <Route exact path='/signup' component={SignUpControl} />
        <Route exact path='/' component={TilesContainer} />
      </Switch>
    </div>
  );
}

export default Home;
