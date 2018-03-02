import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignUpControl from './SignUpControl';


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
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
