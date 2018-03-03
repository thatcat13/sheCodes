//LOCAL STATE

import React from 'react';
import SignUp from './SignUp';
import ConfirmationQuestions from './ConfirmationQuestions';
import PropTypes from 'prop-types';

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
      currentlyVisibleContent = <SignUp onNewUserCreation={this.props.onNewUserCreation}/>;
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

NewUserControl.propTypes = {
  onNewUserCreation: PropTypes.func
}

export default NewUserControl;
