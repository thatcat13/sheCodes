import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  const pStyles = {
    fontSize: '2em'
  }

  const buttonStyles = {
    width: '130px',
    height: '40px',
    borderRadius: '10px',
    boxShadow: '3px 2px 3px grey',
    fontFamily: 'Roboto, monospace',
    fontWeight: 'bolder',
    fontSize: '1em'
  };


  return (
    <div>
      <style jsx>{`
        a {
          font-size: 2em;
          color: black;
          text-shadow: 3px 2px 3px grey;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    <p style={pStyles}>sheCodes( )</p>
      <Link to="/">Home </Link>  <Link to="/signup">Sign Up</Link>  <Link to="/about">About</Link>
      <button style={buttonStyles} type='submit'>Sign Me Up!</button>
    </div>
  );
}

export default Header;
