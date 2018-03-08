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
    textAlign: 'center',
    fontSize: '3em',
    padding: '10px'
  }

  const h2Styles = {
    marginBottom: '0',
    textShadow: '3px 2px 3px grey'
  }

  const buttonStyles = {
    width: '375px',
    height: '60px',
    borderRadius: '10px',
    boxShadow: '3px 2px 3px grey',
    fontFamily: 'Roboto, monospace',
    fontWeight: 'bolder',
    fontSize: '0.75em',
    margin: '10px',
    backgroundColor: '#abf4f4'
  };

  const imgStyles = {
    margin: '7px'
  };

  const tileInformation =
    <div style={outerStyles}>
      <div style={tileStyles}>
        <h2 style={h2Styles}>{props.title}</h2>
        <p>{props.body}</p>
        <img style={imgStyles} src={require(`./../${props.image}`)}></img>
        <a href={props.link} ><button style={buttonStyles} type='submit'>Find out more!</button></a>
      </div>
    </div>

  return (
    <div>
      {tileInformation}
    </div>
  );
}

Tile.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  genre: PropTypes.string,
  tileId: PropTypes.string
}

export default Tile;
