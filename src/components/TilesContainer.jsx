import React from 'react';
import Tile from './Tile';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';


function TilesContainer(props){

  const containerStyles = {
    alignItems: 'center'
  };

  return (
    <div style={containerStyles}>
      {Object.keys(props.tileList).map(function(tileId) {
        let tile = props.tileList[tileId];
        return <Tile title={tile.title}
          body={tile.body}
          image={tile.image}
          key={tileId} />;
        })
      }
    </div>
  );
}

TilesContainer.propTypes = {
  tileList: PropTypes.object
};

export default TilesContainer;
