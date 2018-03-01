import React from 'react';
import Tile from './Tile';


function TilesContainer(){

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  };


  return (
    <div style={containerStyles}>
      <Tile />
    </div>
  );
}

export default TilesContainer;
