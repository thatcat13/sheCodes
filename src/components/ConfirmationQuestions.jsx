import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Would you like to register as a new user?</p>
      <button onClick={props.onNewUserConfirmation}>Yes</button>
    </div>
  );
}
ConfirmationQuestions.propTypes = {
  onNewUserConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
