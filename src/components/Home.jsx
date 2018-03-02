import React from 'react';
import ReactDOM from 'react-dom';
import TilesContainer from './TilesContainer';
import NewUserControl from './NewUserControl';
import { Switch, Route } from 'react-router-dom';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTileList: {
        0: {
          title: 'missO and friends',
          body: 'The official social network created by girls, for girls',
          image: 'missO2.png'
        },
        1: {
          title: 'girls who code',
          body: 'Closing the gender gap in tech, one girl at a time.',
          image: 'girlsWhoCode.jpg'
        },
        2: {
          title: 'black girls code',
          body: 'Closing the gender gap in tech, one girl at a time.',
          image: 'blackGirlsCode.png'
        }
      }
    };
    this.handleAddingNewUser = this.handleAddingNewUser.bind(this);
  }

  handleAddingNewUser(newUser) {
    let newMasterTileList = this.state.masterTileList.slice();
  }



  render() {

    return (
      <div>
        <style jsx global>{`
            body {
              font: 14px 'Roboto', monospace, sans-serif;
              margin: 20px;
            }
            `}</style>

          <Switch>
            <Route exact path='/' render={()=><TilesContainer tileList={this.state.masterTileList}/>} />
            <Route exact path='/signup' component={NewUserControl} />
          </Switch>
        </div>
      );
  }
}

export default Home;
