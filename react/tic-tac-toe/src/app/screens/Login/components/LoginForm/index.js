import React from 'react';
import { Field, reduxForm } from 'redux-form'
import CustomInput from '../../../../components/CustomInput';
import Spinner from 'react-spinkit';

import styles from './styles.module.scss';

import {
  required,
  minLength,
  matchesPassword,
  correctEmail
} from '../../../../../utils/inputValidations';

function LoginForm({ handleSubmit, isLoading, hasError }) { 
  return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <p className={styles.title}>Login</p>
        <Field
          name="email"
          component={CustomInput}
          type="text"
          label="Email"
          validate={[required, correctEmail]}
        />
        <Field
          name="password"
          component={CustomInput}
          type="password"
          label="Password"
          validate={[required, minLength]}
        />
        <Field
          name="confirmPassword"
          component={CustomInput}
          type="password"
          label="Confirm Password"
          validate={[required, matchesPassword]}
        />
        {!isLoading ? 
          <button type="submit" className={!hasError ? styles.loginButton : styles.loginError}>{!hasError ? 'Iniciar Sesión' : 'Error: Reintentar?'}</button>
         : 
        <div type="submit" className={styles.loading}>
          <Spinner name='circle' className={styles.loadingSpinner} />
          <p className={styles.loadingText}>Cargando</p>
        </div>}
      </form>
    );
  }

LoginForm.defaultProps = {
  initialValues: {
    email: '',
    password: ''
  }
}

export default reduxForm({form: 'login'})(LoginForm);
