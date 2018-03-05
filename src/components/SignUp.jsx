import React from 'react';
import PropTypes from 'prop-types';

function SignUp(props){
  let _firstname = null;
  let _email = null;

  function handleNewUserSubmission(event) {
    event.preventDefault();
    _firstname.value='';
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

  const outerDiv = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  const innerDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  const ageButtonStyles = {
    width: '170px',
    height: '70px',
    borderRadius: '10px',
    backgroundColor: 'lightgrey'
  }
  return (
    <div style={anotherStyledComponentStyles}>
      <div style={outerDiv}>
        <div style={innerDiv}>
          <h1>I'm in middle school!</h1>
          <button style={ageButtonStyles} value='6-8' onClick={props.onNewUserConfirmation}>Grades 6 to 8</button>
        </div>
        <div style={innerDiv}>
          <h1>I'm in high school!</h1>
          <button style={ageButtonStyles} value='9-up' onClick={props.onNewUserConfirmation}>Grades 9 & up</button>
        </div>
      </div>
      <p style={titleStyles}>Sign Up</p>
      <p><em>By registering you are confirming you are 10 years or older</em></p>
      <form onSubmit={handleNewUserSubmission} style={formStyles}>
        <input style={inputStyles}
          type='text'
          id='firstname'
          placeholder='First Name'
          ref={(input) => {_firstname = input;}}/>
        <input style={inputStyles}
          type='text'
          id='email'
          placeholder='Email'
          ref={(input) => {_email = input;}}/>
        <button style={buttonStyles} type='submit'>Welcome!</button>
      </form>
    </div>
  );
}

SignUp.propTypes = {
  onNewUserConfirmation: PropTypes.func
}

export default SignUp;
