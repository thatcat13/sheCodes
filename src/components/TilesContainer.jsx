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

      {Object.keys(props.highSchoolList).map(function(tileId, key) {
        let tile = props.highSchoolList[tileId];
        return <Tile title={tile.title}
          body={tile.body}
          image={tile.image}
          key={tileId}
          link={tile.link} />;
        })
      }
      {Object.keys(props.middleSchoolList).map(function(tileId, key) {
        let tile = props.middleSchoolList[tileId];
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

TilesContainer.propTypes = {
  highSchoolList: PropTypes.object,
  middleSchoolList: PropTypes.object
};

export default TilesContainer;
