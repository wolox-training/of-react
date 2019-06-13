import React, { Component } from "react";
import i18n from '../../../config/i18n';
import { t } from 'i18next';

import styles from './styles.module.scss';

class ChangeLanguage extends Component {
    state = {
        selected: 'en',
    }

    spanishSelection = () => {
        this.setState({ selected: 'sp'});
        i18n.changeLanguage('sp');
    }

    englishSelection = () => {
        this.setState({ selected: 'en'});
        i18n.changeLanguage('en');
    }

    render() {
        return (
            <div>
              <button className={this.state.selected === 'sp' ? styles.languageSelected : styles.languageButton} onClick={this.spanishSelection}>{t('topbar.spanish')}</button>
              <button className={this.state.selected === 'en' ? styles.languageSelected : styles.languageButton} onClick={this.englishSelection}>{t('topbar.english')}</button>
            </div>
        );
    }
  
};

export default ChangeLanguage;
