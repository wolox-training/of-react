import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../Login/components/LoginForm';
//import { SubmissionError } from 'redux-form';

import actionsCreators from '../../../redux/login/actions';

class Login extends Component {
  submit = (values) => {
    this.props.checkCredentials(values);
  };

  render() {
    if (this.props.userAuthenticated && !this.props.loading) {
      this.props.history.push("/game");
      return null;
    } else {
      return (
        <LoginForm
          onSubmit={this.submit}
          isLoading={this.props.loading}
        />
      );
    }
  }
}

const mapStateToProps = store => ({
  userAuthenticated: store.login.userAuthenticated,
  loading: store.login.loading
})

const mapDispatchToProps = dispatch => ({
  checkCredentials: ({email, password}) => dispatch(actionsCreators.postUser(email,password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
