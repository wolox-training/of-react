import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import actionsCreators from '../../../redux/login/actions';

class Topbar extends Component {
    goToMatches = () => (this.props.history.push("/matches"));

    goToGame = () => (this.props.history.push("/game"));
    
    render() {
        return (
          <div className={styles.topbar}>
            <button className={styles.topbarItem} onClick={this.goToMatches}>Historial</button>
            <button className={styles.topbarTitle} onClick={this.goToGame} >TA-TE-TI</button>
            <button className={styles.topbarItem} onClick={this.props.logout}>Logout</button>
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionsCreators.logout()),
})

export default connect(
  null,
  mapDispatchToProps
)(Topbar);
