import React, { Component } from 'react';
import ChangeLanguage from '../ChangeLanguage';
import styles from './styles.module.scss';
import { withTranslation } from 'react-i18next';
import { t } from 'i18next';

class Topbar extends Component {
    goToMatches = () => (this.props.history.push("/matches"));

    goToGame = () => (this.props.history.push("/game"));
    
    render() {
      return (
        <div className={styles.topbar}>
          <button className={styles.topbarItem} onClick={this.goToMatches}>{t('topbar.history')}</button>
          <button className={styles.topbarTitle} onClick={this.goToGame} >{t('topbar.title')}</button>
          <div className={styles.rightTopbar}>
            <ChangeLanguage />
            <button className={styles.topbarItem} onClick={this.props.logout}>{t('topbar.logout')}</button>
          </div>
        </div>
  );}
}

export default withTranslation()(Topbar);
