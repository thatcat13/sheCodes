import React from 'react';
import PropTypes from 'prop-types';



function User(props){
  return (
    <div>
      <h3>{props.firstname} - {props.lastname}</h3>
      <p><em>{props.email}</em></p>
      <hr/>
    </div>
  );
}

User.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string
};

export default User;
