import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){

  const anotherStyledComponentStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <div style={anotherStyledComponentStyles}>
      <style jsx global>{`
        .links {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 50%;
          bottom: 10%;
          transform: translate(50%, 50%);
        }
        .copyright {
          position: absolute;
          right: 50%;
          bottom: 5%;
          transform: translate(50%, 50%);
        }
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
      <div className="links">
        <Link to="/">Home </Link>  <Link to="/signup">Sign Up</Link>  <Link to="/about">About</Link>
      </div>
      <div className='copyright'>
        <p>C 2018 sheCodes() All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
