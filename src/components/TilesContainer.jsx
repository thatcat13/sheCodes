import React from 'react';
import Tile from './Tile';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import User from './User';


function TilesContainer(props){


  const containerStyles = {
    alignItems: 'center'
  };

  return (
    <div style={containerStyles}>
      {Object.keys(props.masterTileList).map(function(tileId) {
        let tile = props.masterTileList[tileId];
        return <Tile title={tile.title}
          body={tile.body}
          image={tile.image}
          key={tileId}
          link={tile.link} />;
        })
      }
      {Object.keys(props.userInfo).map(function(userId) {
        let user = props.userInfo[userId];
        return <User firstname={user.firstname}
          key={userId}
          userId={userId} />;
        })
      }
    </div>
  );
}

TilesContainer.propTypes = {
  masterTileList: PropTypes.object,
  userTileList: PropTypes.object,
  userInfo: PropTypes.object
};

export default TilesContainer;
