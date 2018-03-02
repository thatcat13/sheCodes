import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){

  const copyrightStyles = {
    fontSize: '1em'
  }

  return (
    <div>
      <div>
        <Link to="/">Home </Link>  <Link to="/signup">Sign Up</Link>  <Link to="/about">About</Link>
      </div>
      <div>
        <p style={copyrightStyles}>C 2018 sheCodes() All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
