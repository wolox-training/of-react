import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
//import { customInput, customSelect, discounts } from './fields';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          //component={customInput}
          component="input"
          type="text"
        />
        <Field
          name="password"
          //component={customInput}
          component="input"
          type="password"
          label="Password"
          //validate={[required]}
        />
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'register',
  /*asyncValidate,
  asyncBlurFields: ['username']*/
})(LoginForm);

export default LoginForm;