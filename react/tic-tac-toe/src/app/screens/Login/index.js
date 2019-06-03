import React, { Component } from 'react';
import LoginForm from '../Login/components/LoginForm';

class Login extends Component {
  submit = values => {
    //window.alert(JSON.stringify(values, null, 4));
  };

  getInitialValues() {
    return {
      
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