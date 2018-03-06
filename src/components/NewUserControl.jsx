//LOCAL STATE

// import React from 'react';
// import SignUp from './SignUp';
// import PropTypes from 'prop-types';
//
// class NewUserControl extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       userVisible: false
//     };
//     this.handleNewUserConfirmation = this.handleNewUserConfirmation.bind(this);
//   }
//
//   handleNewUserConfirmation() {
//     this.setState({userVisible: true});
//   }
//
//   render(){
//     let currentlyVisibleContent = null;
//     if (this.state.userVisible) {
//       currentlyVisibleContent = <SignUp onNewUserCreation={this.props.onNewUserCreation}/>;
//     } else {
//       currentlyVisibleContent = <SignUp onNewUserConfirmation={this.handleNewUserConfirmation}/>;
//     }
//     return (
//       <div>
//         {currentlyVisibleContent}
//       </div>
//     );
//   }
// }
//
// NewUserControl.propTypes = {
//   onNewUserCreation: PropTypes.func
// }
//
// export default NewUserControl;
