import React from 'react';
import { Field, reduxForm } from 'redux-form'
import CustomInput from '../../../../components/CustomInput';

import styles from './styles.module.scss';

import {
    required,
  } from '../../../../../utils/inputValidations';

function GameForm({ handleSubmit }) { 
  return (
      <form onSubmit={handleSubmit} className={styles.gameForm}>
        <p className={styles.formTitle}>Introduzca nombres</p>
        <Field
          name="playerOne"
          component={CustomInput}
          type="text"
          label="Jugador 1"
          validate={[required]}
        />
        <Field
          name="playerTwo"
          component={CustomInput}
          type="text"
          label="Jugador 2"
          validate={[required]}
        />
        <button type="submit" className={styles.formButton}>Jugar</button>
      </form>
    );
  }

GameForm.defaultProps = {
  initialValues: {
    playerOne: '',
    playerTwo: ''
  }
}

export default reduxForm({form: 'gameForm'})(GameForm);