import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SignUp(props){

  const outerContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  };

  const buttonStyles = {
    width: '300px',
    height: '50px',
    borderRadius: '10px',
    boxShadow: '3px 2px 3px grey',
    fontFamily: 'Roboto, monospace',
    fontWeight: 'bolder',
    fontSize: '1.75em',
    padding: '5px',
    margin: '10px',
    backgroundColor: 'lightgrey'
  };
  const ageButtonStyles = {
    width: '300px',
    height: '175px',
    borderRadius: '10px',
    boxShadow: '3px 2px 3px grey',
    fontFamily: 'Roboto, monospace',
    fontWeight: 'bolder',
    fontSize: '1.75em',
    padding: '5px',
    margin: '10px',
    backgroundColor: 'lightgrey'
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
    width: '90%',
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

  const linkStyles = {
    width: '300px',
    height: '70px',
    borderRadius: '10px',
    boxShadow: '3px 2px 3px grey',
    fontFamily: 'Roboto, monospace',
    fontWeight: 'bolder',
    fontSize: '1.75em',
    padding: '5px',
    margin: '10px',
    textDecoration: 'none',
    backgroundColor: 'lightgrey',
    color: 'black',
    textAlign: 'center'
  }

  const labelStyles = {
    fontSize: '2em',
    padding: '10px',
    border: '1px solid lightgrey',
    color: '#878787'
  }


  const selectStyles = {
    fontSize: '1em',
    float: 'right',
    paddingLeft: '50px',
    color: '#878787'
  }

  function handleSchoolValue(event) {
    event.preventDefault();
    console.log('tileList click');
    console.log(event.target.value);
    console.log(typeof event.target.value);
    let schoolValue = event.target.value;
    props.onCreatingUserTileList(schoolValue);

  }



  function handleFormClick() {

  };

  return (
    <div style={outerContainerStyles}>
      <div style={formDiv}>
        <p style={titleStyles}>Sign Up</p>
        <form style={formStyles}>
          <input style={inputStyles}
            type='text'
            id='firstname'
            placeholder='First Name'/>
          <input style={inputStyles}
            type='text'
            id='email'
            placeholder='Email'/>
          <label style={labelStyles}>
            What's your age group?
            <select onChange={handleSchoolValue} style={selectStyles}>
              <option>Select here</option>
              <option value="middleschool">Middle school</option>
              <option value="highschool">High school</option>
            </select>
          </label>

          <Link to="/user"><button style={buttonStyles} type='submit'>Welcome!</button></Link>
        </form>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  onCreatingUserTileList: PropTypes.func
}

export default SignUp;
