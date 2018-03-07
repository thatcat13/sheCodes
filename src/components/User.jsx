import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function User(props){

  const outerStyles = {
    padding: '20px',
    margin: '20px'
  }
  const tileStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
    fontSize: '3em',
    padding: '10px'
  }

  const h2Styles = {
    marginBottom: '0',
    textShadow: '3px 2px 3px grey'
  }


  const userInformation =
    <div style={outerStyles}>
      <div style={tileStyles}>
        <h2 style={h2Styles}>Oh, hi! Here's your list, {props.firstname}</h2>
      </div>
    </div>

  return (
    <div>
      {userInformation}
    </div>
  );
}

User.propTypes = {
  firstname: PropTypes.string,
  email: PropTypes.string,
  userId: PropTypes.string
}

export default User;
