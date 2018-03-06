import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SignUp(props){
  let _firstname = null;
  let _email = null;

  function handleNewUserSubmission(event) {
    event.preventDefault();
    props.onCreatingNewUser({firstname: _firstname.value, email: _email.value})
    _firstname.value='';
    _email.value='';
  }


  const outerContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  };

  const buttonStyles = {
    width: '220px',
    height: '50px',
    borderRadius: '10px',
    boxShadow: '3px 2px 3px grey',
    fontFamily: 'Roboto, monospace',
    fontWeight: 'bolder',
    fontSize: '1.75em',
    padding: '5px',
    margin: '10px'
  };
  const ageButtonStyles = {
    width: '300px',
    height: '150px',
    borderRadius: '10px',
    boxShadow: '3px 2px 3px grey',
    fontFamily: 'Roboto, monospace',
    fontWeight: 'bolder',
    fontSize: '1.75em',
    padding: '5px',
    margin: '10px'
  };

  const titleStyles = {
    color: 'black',
    textShadow: '3px 2px 3px grey',
    fontSize: '50px',
    textAlign: 'center',
    margin: '0',
    padding: '10px'
  };
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black'
  };

  const inputStyles = {
    width: 'auto',
    height: 'auto',
    margin: '5px',
    fontSize: '2em',
    border: '1px solid darkgrey'
  }

  const ageDiv = {
    display: 'flex',
    justifyContent: 'space-between'
  }
  const formDiv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '50px'
  }

  const innerDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    textAlign: 'center'
  }

  function handleMiddleSchoolClick() {
    props.onCreatingUserTileList('middleschool');
    console.log('hoooo!');
  }

  function handleHighSchoolClick() {
    props.onCreatingUserTileList('highschool');
    console.log('hey!');
  }

  return (
    <div style={outerContainerStyles}>
      <div style={ageDiv}>
        <div style={innerDiv}>
          <button style={ageButtonStyles}  onClick={handleMiddleSchoolClick}>Middle schoolers click here!</button>
        </div>
        <div style={innerDiv}>
          <button style={ageButtonStyles}  onClick={handleHighSchoolClick}>High schoolers click here!</button>
        </div>
      </div>
      <div style={formDiv}>
        <p style={titleStyles}>Sign Up</p>
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
          <Link to="/user"><button style={buttonStyles} type='submit'>Welcome!</button></Link>
        </form>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  onCreatingUserTileList: PropTypes.func,
  onCreatingNewUser: PropTypes.func
}

export default SignUp;
