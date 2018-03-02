
import React from 'react';
import SignUp from './SignUp';
import Home from './Home';

class NewUserControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homePageVisible: false
    };
    console.log(this.state);
    this.handleNewUserConfirmation = this.handleNewUserConfirmation.bind(this);
  }

  handleNewUserConfirmation() {
    this.setState({homePageVisible: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.homePageVisible) {
      currentlyVisibleContent = <Home />;
    } else {
      currentlyVisibleContent = <SignUp onNewUserConfirmation={this.handleNewUserConfirmation} />
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewUserControl;
