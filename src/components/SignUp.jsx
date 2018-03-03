import React from 'react';
import PropTypes from 'prop-types';

function SignUp(props){
  let _firstname = null;
  let _lastname = null;
  let _email = null;

  function handleNewUserSubmission(event) {
    event.preventDefault();
    _firstname.value='';
    _lastname.value='';
    _email.value='';
  }

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
    fontSize: '50px',
    textAlign: 'center',
    margin: '0'
  };
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black'
  };

  const inputStyles = {
    width: '500px',
    height: '20px',
    margin: '5px'
  }

  return (
    <div style={anotherStyledComponentStyles}>
      <p style={titleStyles}>Sign Up</p>
      <p><em>By registering you are confirming you are 12 years or older</em></p>
      <form onSubmit={handleNewUserSubmission} style={formStyles}>
        <input style={inputStyles}
          type='text'
          id='firstname'
          placeholder='First Name'
          ref={(input) => {_firstname = input;}}/>
        <input style={inputStyles}
          type='text'
          id='lastname'
          placeholder='Last Name'
          ref={(input) => {_lastname = input;}}/>
        <input style={inputStyles}
          type='text'
          id='email'
          placeholder='Email'
          ref={(input) => {_email = input;}}/>
        <button style={buttonStyles} type='submit'>Welcome</button>
      </form>
    </div>
  );
}

SignUp.propTypes = {
  onNewUserConfirmation: PropTypes.func
}

export default SignUp;
