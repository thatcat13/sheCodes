import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  const outerDiv = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px'
  }
  const pStyles = {
    fontSize: '3em'
  }
  const linkStyles = {
    fontSize: '2.5em',
    color: 'black',
    textShadow: '3px 2px 3px grey',
    textDecoration: 'none',
    padding: '5px'
  }


  return (
    <div>
      <div style={outerDiv}>
        <style jsx>{`

          a:hover {
            text-decoration: underline;
          }
        `}</style>
        <div>
          <p style={pStyles}>sheCodes( )</p>
        </div>
        <div>
          <Link style={linkStyles} to="/">Home </Link>  <Link style={linkStyles} to="/signup">SignUp</Link>  <Link style={linkStyles} to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}


export default Header;
