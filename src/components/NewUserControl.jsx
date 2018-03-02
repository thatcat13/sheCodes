//LOCAL STATE

import React from 'react';
import SignUp from './SignUp';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewUserControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signUpFormVisible: false
    };
    this.handleNewUserConfirmation = this.handleNewUserConfirmation.bind(this);
  }

  handleNewUserConfirmation() {
    this.setState({signUpFormVisible: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.signUpFormVisible) {
      currentlyVisibleContent = <SignUp />
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onNewUserConfirmation={this.handleNewUserConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewUserControl;
