import React, { Component } from 'react';
import LoginForm from '../Login/components/LoginForm';

class Login extends Component {
  submit = values => {
    //should verified email and password
    this.props.history.push("/game");
  };

  getInitialValues() {
    return {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.submit}
        initialValues={this.getInitialValues()}
      />
    );
  }
}

export default Login;