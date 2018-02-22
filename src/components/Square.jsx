//Square is a controlled component; it receives its value from its parent Board and informs Board when it's clicked
import React from 'react';
import PropTypes from 'prop-types';


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
