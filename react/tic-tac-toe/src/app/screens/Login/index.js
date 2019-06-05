import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../Login/components/LoginForm';
import { SubmissionError } from 'redux-form';

import actionsCreators from '../../../redux/login/actions';

class Login extends Component {
  submit = values => {
    this.props.checkCredentials(values);
    console.log(this.props.userAuthenticated);
    if(!this.props.userAuthenticated) {
      throw new SubmissionError({
        email: 'Email o contraseña incorrectos',
        password: 'Email o contraseña incorrectos'
      })
    }
    else {
      this.props.history.push("/game");
    }
  };

  render() {
    return (
      <LoginForm
        onSubmit={this.submit}
      />
    );
  }
}

const mapStateToProps = store => ({
  userAuthenticated: store.login.userAuthenticated
})

const mapDispatchToProps = dispatch => ({
  checkCredentials: ({email, password}) => dispatch(actionsCreators.postUser(email,password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
