import React from 'react';
import Tile from './Tile';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import User from './User';


function UserTiles(props){

  function handleNewUserSubmission(event) {
    event.preventDefault();
    props.onCreatingNewUser({firstname: _firstname.value, email: _email.value})
    _firstname.value='';
    _email.value='';
  }


  const containerStyles = {
    alignItems: 'center'
  };

  return (
    <div style={containerStyles}>
      {Object.keys(props.userInfo).map(function(userId) {
        let user = props.userInfo[userId];
        console.log(user);
        return <User firstname={user.firstname}
          key={userId} />;
        })
      }
      {Object.keys(props.userTileList).map(function(tileId) {
        let tile = props.userTileList[tileId];
        console.log(tile);
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
