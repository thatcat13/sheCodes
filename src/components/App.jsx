import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import TilesContainer from './TilesContainer';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';


function App() {
  return (
    <div>
      <Header />
      <style jsx global>{`
        body {
          font: 14px 'Roboto', monospace, sans-serif;
          margin: 20px;
        }
      `}</style>
      <Switch>
        <Route exact path='/' component={TilesContainer} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
