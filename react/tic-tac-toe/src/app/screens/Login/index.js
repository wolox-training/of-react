import React, { Component } from 'react';
import LoginForm from '../Login/components/LoginForm';

class Login extends Component {
  submit = values => {
    //should verified email and password
    this.props.history.push("/game");
  };

  render() {
    return (
      <LoginForm
        onSubmit={this.submit}
      />
    );
  }
}

export default Login;
