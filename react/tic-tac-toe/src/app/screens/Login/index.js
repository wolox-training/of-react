import React, { Component } from 'react';
import LoginForm from '../Login/components/LoginForm';
import { connect } from 'react-redux';
import actionsCreators from '../../../redux/login/actions';

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

const mapStateToProps = store => ({
  loading: store.login.loading,
  errorMessage: store.login.errorMessage
})

const mapDispatchToProps = dispatch => ({
  checkCredentials: ({email, password}) => dispatch(actionsCreators.postUser(email,password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
