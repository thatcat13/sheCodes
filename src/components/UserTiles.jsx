import React from 'react';
import Tile from './Tile';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import User from './User';


function UserTiles(props){


  const containerStyles = {
    alignItems: 'center'
  };

  console.log(props.userInfo);
  return (
    <div style={containerStyles}>
      <User />
      {Object.keys(props.userTileList).map(function(tileId) {
        let tile = props.userTileList[tileId];
        return <Tile title={tile.title}
          body={tile.body}
          image={tile.image}
          key={tileId}
          link={tile.link} />;
        })
      }
    </div>
  );
}

UserTiles.propTypes = {
  userTileList: PropTypes.object,
  userInfo: PropTypes.object
};

export default UserTiles;
