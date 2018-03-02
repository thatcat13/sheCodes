import React from 'react';
import Tile from './Tile';
import MediaQuery from 'react-responsive';


function TilesContainer(){

  const masterTileList = [
    {
      title: 'missO and friends',
      body: 'The official social network created by girls, for girls',
      image: 'missO2.png'
    },
    {
      title: 'girls who code',
      body: 'Closing the gender gap in tech, one girl at a time.',
      image: 'girlsWhoCode.jpg'
    },
    {
      title: 'black girls code',
      body: 'Closing the gender gap in tech, one girl at a time.',
      image: 'blackGirlsCode.png'
    }
  ]

  const containerStyles = {
    alignItems: 'center'
  };

  return (
    <div style={containerStyles}>
      {masterTileList.map((tile, index) =>
        <Tile title={tile.title}
          body={tile.body}
          image={tile.image}
          key={index} />
      )}
    </div>
  );
}

export default TilesContainer;
