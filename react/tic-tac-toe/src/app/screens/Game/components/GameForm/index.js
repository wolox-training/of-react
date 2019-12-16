import React from 'react';
import { Field, reduxForm } from 'redux-form'
import CustomInput from '../../../../components/CustomInput';
import { t } from 'i18next';
import { withTranslation } from 'react-i18next';
import styles from './styles.module.scss';

import {
    required,
  } from '../../../../../utils/inputValidations';

function GameForm({ handleSubmit }) { 
  return (
    <form onSubmit={handleSubmit} className={styles.gameForm}>
      <p className={styles.formTitle}>{t('gameForm.getNamesMsg')}</p>
      <Field
        name="playerOne"
        component={CustomInput}
        type="text"
        label={t('gameForm.playerOne')}
        validate={[required]}
      />
      <Field
        name="playerTwo"
        component={CustomInput}
        type="text"
        label={t('gameForm.playerTwo')}
        validate={[required]}
      />
      <button type="submit" className={styles.formButton}>{t('gameForm.play')}</button>
    </form>
    );
  }

GameForm.defaultProps = {
  initialValues: {
    playerOne: '',
    playerTwo: ''
  }
}

export default withTranslation()(reduxForm({form: 'gameForm'})(GameForm));
