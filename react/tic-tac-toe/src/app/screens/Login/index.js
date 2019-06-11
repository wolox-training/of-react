import React, { Component } from 'react';
import LoginForm from '../Login/components/LoginForm';

class Login extends Component {
  submit = (values) => this.props.checkCredentials({email: values.email, password: values.password});

  render() {
    if (this.props.userAuthenticated && !this.props.loading) {
      this.props.history.push("/game");
      return null;
    } else {
      return (
        <LoginForm
          onSubmit={this.submit}
          isLoading={this.props.loading}
          hasError={this.props.hasError}
        />
      );
    }
  }
}

export default Login;
