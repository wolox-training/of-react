import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../Login/components/LoginForm';
import actionsCreators from '../../../redux/login/actions';

class Login extends Component {
  submit = (values) => this.props.checkCredentials(values);

  render() {
      return (
        <LoginForm
          onSubmit={this.submit}
          isLoading={this.props.loading}
          hasError={this.props.hasError}
        />
      );
    }
}

const mapDispatchToProps = dispatch => ({
  checkCredentials: ({email, password}) => dispatch(actionsCreators.postUser(email,password)),
})


export default connect(
  null,
  mapDispatchToProps
)(Login);
