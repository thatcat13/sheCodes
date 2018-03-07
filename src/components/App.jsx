import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header />
      <style jsx global>{`
        body {
          font-family: monospace, sans-serif;
          margin: 20px;
        }
      `}</style>
      <Home />
    </div>
  );
}

export default App;
