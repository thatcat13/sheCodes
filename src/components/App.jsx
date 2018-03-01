import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';


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
      <p>App works!</p>
      <Footer />
    </div>
  );
}

export default App;
