import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){

  const outerDiv = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px'
  }
  const copyrightStyles = {
    fontSize: '1em',
    marginLeft: '20px'
  }
  const relative = {
    position: 'relative',
    bottom: '0',
    left: '0',
    marginTop: '50px'
  }

  const linkStyles = {
    fontSize: '2.5em',
    color: 'black',
    textShadow: '3px 2px 3px grey',
    textDecoration: 'none',
    padding: '10px'
  }

  return (
    <div style={relative}>
      <div style={outerDiv}>
        <Link style={linkStyles} to="/">Home </Link>  <Link style={linkStyles} to="/signup">SignUp</Link>  <Link style={linkStyles} to="/about">About</Link>
      </div>
      <div>
        <p style={copyrightStyles}>C 2018 sheCodes() All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
