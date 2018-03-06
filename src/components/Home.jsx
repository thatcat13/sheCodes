import React from 'react';
import ReactDOM from 'react-dom';
import TilesContainer from './TilesContainer';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import SignUp from './SignUp';
import Footer from './Footer';
import { v4 } from 'uuid';
import User from './User';



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTileList: {
        0: {
          title: 'missO and friends',
          body: 'The official social network created by girls, for girls',
          image: 'missO2.png',
          link: 'https://missoandfriends.com/',
          genre: 'middleschool'
        },
        1: {
          title: 'girls who code',
          body: 'Closing the gender gap in tech, one girl at a time',
          image: 'girlsWhoCode.jpg',
          link: 'https://girlswhocode.com/',
          genre: 'middleschool'
        },
        2: {
          title: 'black girls code',
          body: 'Our Vision: To increase the number of women of color in the digital space by empowering girls of color ages 7 to 17 to become innovators in STEM fields, leaders in their communities, and builders of their own futures through exposure to computer science and technology',
          image: 'blackGirlsCode.png',
          link: 'http://www.blackgirlscode.com/',
          genre: 'middleschool'
        },
        3: {
          title: 'made with code',
          body: 'Check out some of the things we’ve been up to and find out how to host your own coding party IRL',
          image: 'madewithcode.jpg',
          link: 'https://www.madewithcode.com/',
          genre: 'highschool'
        },
        4: {
          title: 'girl develop it',
          body: 'Don\'t be shy, develop it',
          image: 'gdi.png',
          link: 'https://www.girldevelopit.com/',
          genre: 'highschool'
        },
        5: {
          title: 'code like a girl',
          body: 'Code Like a Girl is an organisation dedicated to providing girls with the tools, knowledge and support to enter and flourish in the world of coding',
          image: 'codelikeagirl.jpg',
          link: 'https://codelikeagirl.org/',
          genre: 'highschool'
        }
      },
      userTileList: {},
      user: {
        firstname: 'Cat',
        email: 'blerg@blerg.com'
      }
    };
    this.handleCreatingUserTileList = this.handleCreatingUserTileList.bind(this);
    this.handleCreatingNewUser = this.handleCreatingNewUser.bind(this);
  }

  handleCreatingUserTileList(newUserList) {

    for (let key of Object.keys(this.state.masterTileList)) {
      let testList = this.state.masterTileList[key].genre;
      console.log(testList);
    }

    // let testList = this.state.masterTileList[5].genre;
    // console.log(testList);
    // let newUserTileList = {};
    // if ( form value === 'middleschool') {
    //   newUserTileList = this.state.masterTileList.genre[middleschool];
    // } else if ( form value === 'highschool') {
    //   newUserTileList = this.state.masterTileList.genre[highschool]
    // }
    // let newUserTileList = Object.assign({}, this.state.masterTileList, {[newUserTile.genre]: newUserList})
    // this.setState({masterTileList: newUserTileList});
    // console.log('ive been activated woo');
  }

  handleCreatingNewUser(newUserObject) {
    let userId = v4();
    let newUser = Object.assign({}, this.state.user, {
      [userId]: newUserObject
    })
    this.setState({user: newUser});
    console.log(newUserObject);
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
            <Route exact path='/' render={()=><TilesContainer masterTileList={this.state.masterTileList} userInfo={this.state.user}/>} />
            <Route path='/signup' render={()=><SignUp onCreatingUserTileList={this.handleCreatingUserTileList} onCreatingNewUser={this.handleCreatingNewUser}/>} />
            <Route path='/about' render={()=><About/>} />
          </Switch>
          <Footer />
        </div>
      );
  }
}

export default Home;
