import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { customInput } from '../fields/index';

import styles from './styles.modules.scss';

import {
  required,
  minLength,
  matchesPassword,
  correctEmail
} from '../../validation/index';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className='form'>
        <p className="title">Login</p>
        <Field
          name="email"
          component={customInput}
          type="text"
          label="Email"
          validate={[correctEmail]}
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required, minLength]}
        />
        <Field
          name="confirmPassword"
          component={customInput}
          type="password"
          label="Confirm Password"
          validate={[required, matchesPassword]}
        />
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginForm;