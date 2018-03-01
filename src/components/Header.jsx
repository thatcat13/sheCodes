import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  const anotherStyledComponentStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  };

  const buttonStyles = {
    width: '130px',
    height: '40px',
    borderRadius: '10px',
    boxShadow: '3px 2px 3px grey',
    fontFamily: 'Roboto, monospace',
    fontWeight: 'bolder',
    fontSize: '1em',
    padding: '5px'
  };

  const titleStyles = {
    color: 'black',
    textShadow: '3px 2px 3px grey',
    fontSize: '75px',
    textAlign: 'center'
  };
  const linkStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={anotherStyledComponentStyles}>
      <style jsx>{`
        a {
          color: black;
          text-shadow: 3px 2px 3px grey;
          font-size: 2em;
          text-decoration: none;
          padding: 20px;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    <h1 style={titleStyles}>sheCodes( )</h1>
      <div style={linkStyles}>
        <Link to="/">Home </Link>  <Link to="/signup">Sign Up</Link>  <Link to="/about">About</Link>
        <button style={buttonStyles} type='submit'>Sign Me Up!</button>
      </div>
    </div>
  );
}

export default Header;
