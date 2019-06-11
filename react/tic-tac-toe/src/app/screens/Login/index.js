import React, { Component } from 'react';
import LoginForm from '../Login/components/LoginForm';

class Login extends Component {
  submit = (values) => {
    this.props.checkCredentials(values);
  };

  render() {
      return (
        <LoginForm
          onSubmit={this.submit}
          isLoading={this.props.loading}
          hasError={this.props.hasError ? true : false}
        />
      );
    }
}


export default Login;
