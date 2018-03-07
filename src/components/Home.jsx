import React from 'react';
import ReactDOM from 'react-dom';
import TilesContainer from './TilesContainer';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import SignUp from './SignUp';
import Footer from './Footer';
import { v4 } from 'uuid';
import UserTiles from './UserTiles';
import HighSchoolList from '../assets/HighSchoolList';
import MiddleSchoolList from '../assets/MiddleSchoolList';
import Tile from './Tile';
import User from './User';



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      highSchoolList: HighSchoolList,
      middleSchoolList: MiddleSchoolList,
      userTileList: {},
      user: {
        // 1: {
        //   firstname: 'Cat',
        //   email: 'blerg@blerg.com'
        // }
      }
    };
    this.handleCreatingUserTileList = this.handleCreatingUserTileList.bind(this);
    this.handleCreatingNewUser = this.handleCreatingNewUser.bind(this);
  }

  handleCreatingUserTileList(schooltype) {
    console.log(schooltype);
    let newUserTileList = {};
    if (schooltype === 'middleschool') {
      newUserTileList = this.state.middleSchoolList;
      console.log(newUserTileList);
      this.setState({userTileList: newUserTileList});
    } else if (schooltype === 'highschool') {
      newUserTileList = this.state.highSchoolList;
      console.log(newUserTileList);
      this.setState({userTileList: newUserTileList});
    } else {
      newUserTileList = this.state;
    console.log(newUserTileList);
    this.setState({userTileList: newUserTileList});
    }
}

  handleCreatingNewUser(newUserObject) {
    console.log('clickmofo!');
    let userId = v4();
    let newUser = Object.assign({}, this.state.user, {
      [userId]: newUserObject
    })
    this.setState({user: newUser});
  }

  render() {
    return (
      <div>
        <style jsx>{`
            body {
              margin: 20px;
            }
            `}</style>
          <Switch>
            <Route exact path='/' render={() => <TilesContainer highSchoolList={this.state.highSchoolList} middleSchoolList={this.state.middleSchoolList} />} />
            <Route path='/signup' render={() => <SignUp onCreatingUserTileList={this.handleCreatingUserTileList} onCreatingNewUser={this.handleCreatingNewUser}/>} />
            <Route path='/about' render={() => <About/>} />
            <Route path='/user' render={() => <UserTiles userTileList={this.state.userTileList} userInfo={this.state.user}/>} />
          </Switch>
          <Footer />
        </div>
      );
  }
}

export default Home;
