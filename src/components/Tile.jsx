import React from 'react';
import { Link } from 'react-router-dom';
import missO from './../missO.png';

function Tile(){

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
    height: 'auto'
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

  return (
    <div style={outerStyles}>
      <div style={tileStyles}>
        <h3>missO and friends</h3>
        <p>The official social network created by girls, for girls</p>
        <img src={missO}></img>
        <button style={buttonStyles} type='submit'>Find out more!</button>
      </div>
  </div>
  )
}

export default Tile;
