
import React from 'react';
import SignUp from './SignUp';

class SignUpControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userVisibleOnPage: false
    };
  }
  //   this.handleClick = this.handleClick.bind(this);
  // }
  //
  // handleClick() {
  //   this.setState({userVisibleOnPage: true});
  //   console.log('userVisibleOnPage is currently set to: ' + this.state.userVisibleOnPage);
  // }

  render(){
    let userVisibleOnPage = null;
    if (this.state.userVisibleOnPage) {
      currentlyVisibleContent = <Home />;
    } else {
      currentlyVisibleContent = <SignUp />
    }
    return (
      <div>
        <SignUp />
      </div>
    );
  }
}

export default SignUpControl;
