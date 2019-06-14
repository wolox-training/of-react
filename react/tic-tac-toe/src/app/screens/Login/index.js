import React, { Component } from 'react';
import LoginForm from '../Login/components/LoginForm';
import { connect } from 'react-redux';
import UsersService from '~services/UsersService';

class Login extends Component {
  submit = (values) => this.props.checkCredentials(values);

  render() {
      return (
        <LoginForm
          onSubmit={this.submit}
          isLoading={this.props.loading}
          hasError={this.props.errorMessage=== '' ? false: true}
        />
      );
    }
}

Login.defaultProps = {
  loading: true,
  errorMessage: ''
};

const mapStateToProps = store => ({
  loading: store.login.tokenLoading,
  errorMessage: store.login.tokenError
})

const mapDispatchToProps = dispatch => ({
  checkCredentials: (creds) => dispatch(UsersService.postUser(creds)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
