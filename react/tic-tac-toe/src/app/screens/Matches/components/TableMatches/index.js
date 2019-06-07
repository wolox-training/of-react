import React, { Component } from 'react';


import { connect } from 'react-redux';
import { arrayOf } from 'prop-types';

import actionsCreators from '../../../../../redux/table-matches/actions';

import styles from './styles.module.scss';

var Spinner = require('react-spinkit');

class TableMatches extends Component {
  componentDidMount() {
    this.props.getMatches();
  }

  renderMatch(match) {
    return (
      <tr>
        <td className={styles.tableChild}>{match.player_one}</td>
        <td className={styles.tableChild}>{match.player_two}</td>
        <td className={styles.tableChild}>{match.winner === 'player_one' ? match.player_one : match.winner === 'player_two' ? match.player_two : match.winner}</td> 
      </tr>
    );
  }

  renderLoading() {
    return <Spinner className={styles.loading} name='double-bounce' />;
  }

  render () {
    if (this.props.matches.length) {
      return (
        <div className={styles.matches}>
          <div className={styles.tableTitle}>Historial de Partidas:</div>
          <table className={styles.tableMatches}>
            <tr>
              <th className={styles.tableHeader}>Player One</th>
              <th className={styles.tableHeader}>Player Two</th>
              <th className={styles.tableHeader}>Winner</th> 
            </tr>
            {this.props.matches.map(this.renderMatch)}
          </table>
        </div>
      );
    } else {
      return (
        <div className={styles.matches}>
          <div>Cargando Historial de Partidas... </div>  
          {this.renderLoading()}
        </div>
        );
    }
  }
}

TableMatches.propTypes = {
  matches: arrayOf(Object)
}

const mapStateToProps = store => ({
  matches: store.matches.matches
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(actionsCreators.getMatches(dispatch)),
  loadMatches: (matches) => dispatch(actionsCreators.loadMatches(matches))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableMatches);