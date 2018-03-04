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
          body: 'Closing the gender gap in tech, one girl at a time',
          image: 'girlsWhoCode.jpg'
        },
        2: {
          title: 'black girls code',
          body: 'Our Vision: To increase the number of women of color in the digital space by empowering girls of color ages 7 to 17 to become innovators in STEM fields, leaders in their communities, and builders of their own futures through exposure to computer science and technology',
          image: 'blackGirlsCode.png'
        },
        3: {
          title: 'made with code',
          body: 'Check out some of the things we’ve been up to and find out how to host your own coding party IRL',
          image: 'madewithcode.jpg'
        },
        4: {
          title: 'girl develop it',
          body: 'Don\'t be shy, develop it',
          image: 'gdi.png'
        },
        5: {
          title: 'code like a girl',
          body: 'Code Like a Girl is an organisation dedicated to providing girls with the tools, knowledge and support to enter and flourish in the world of coding',
          image: 'codelikeagirl.jpg'
        }
      }
    };
    this.handleAddingNewUser = this.handleAddingNewUser.bind(this);
  }

  handleAddingNewUser(newUser) {
    let newMasterTileList = this.state.masterTileList.slice();
    this.setState({masterTileList: newMasterTileList});
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
            <Route path='/signup' render={()=><NewUserControl onNewUserCreation={this.handleAddingNewUser} />} />

          </Switch>
        </div>
      );
  }
}

export default Home;
