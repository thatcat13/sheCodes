import React from 'react';

function About(){


  const anotherStyledComponentStyles = {
    display: 'flex',
    flexDirection: 'column',
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
    padding: '5px',
    margin: '10px'
  };

  const titleStyles = {
    color: 'black',
    textShadow: '3px 2px 3px grey',
    fontSize: '75px',
    textAlign: 'center',
    margin: '0'
  };

  const pStyles = {
    fontSize: '1.75em',
    textAlign: 'center',
    margin: '20px'
  };

  return (
    <div style={anotherStyledComponentStyles}>
      <h2 style={titleStyles}>About Us</h2>
      <p style={pStyles}><em>At sheCodes(), this is totally borrowed content that I'll fill in later. We believe the gender gap in technology is an issue we must all come together to solve. With your support, we will continue to build a future where our next generation of girls and boys will prosper through creativity, through bravery, and through teamwork.</em></p>
    </div>
  );
}

export default About;
