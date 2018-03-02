import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Tile(props){

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
    border: '1px solid black',
    padding: '10px',
    textAlign: 'center'
  }

  const buttonStyles = {
    width: '130px',
    height: '30px',
    borderRadius: '10px',
    boxShadow: '3px 2px 3px grey',
    fontFamily: 'Roboto, monospace',
    fontWeight: 'bolder',
    fontSize: '1em',
    padding: '5px'
  };

  const imgStyles = {
    margin: '7px'
  };

  return (
    <div style={outerStyles}>
      <div style={tileStyles}>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <img style={imgStyles} src={require(`./../${props.image}`)}></img>
        <button style={buttonStyles} type='submit'>Find out more!</button>
      </div>
    </div>
  )
}

Tile.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string
}

export default Tile;
