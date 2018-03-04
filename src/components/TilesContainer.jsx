import React from 'react';
import Tile from './Tile';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';


function TilesContainer(props){

  // props.onNewUserCreation({});

  const containerStyles = {
    alignItems: 'center'
  };

  return (
    <div style={containerStyles}>
      <MediaQuery maxDeviceWidth={1824}>
        {Object.keys(props.tileList).map(function(tileId) {
          let tile = props.tileList[tileId];
          return <Tile title={tile.title}
            body={tile.body}
            image={tile.image}
            key={tileId} />;
          })
        }
      </MediaQuery>
    </div>
  );
}

TilesContainer.propTypes = {
  tileList: PropTypes.object,
  onNewUserCreation: PropTypes.func
};

export default TilesContainer;
