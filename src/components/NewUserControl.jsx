
import React from 'react';
import SignUp from './SignUp';

class NewUserControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newUserRegistered: false
    };
    this.handleUserConfirmation = this.handleUserConfirmation.bind(this);
    console.log(this.state);
  }

  handleUserConfirmation() {
    alert('testing');
    this.setState({newUserRegistered: true});
  }

  render(){

    let currentlyVisibleContent = null;
    if (this.state.newUserRegistered) {
      currentlyVisibleContent = <App />;
    } else {
      currentlyVisibleContent = <SignUp onUserConfirmation={this.handleUserConfirmation} />
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewUserControl;
