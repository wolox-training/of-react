import React, { Component } from 'react';

import Match from '../Match';
import { connect } from 'react-redux';
import { arrayOf } from 'prop-types';

import actionsCreators from '../../../../../redux/table-matches/actions';
import styles from './styles.module.scss';
import Spinner from 'react-spinkit';

class TableMatches extends Component {
  componentDidMount() {
    this.props.getMatches();
  }

  renderMatch = (info) => {
    return (<Match match={info} key={info.id} />)
   };

  renderLoading() {
    return <Spinner className={styles.loading} name='double-bounce' />;
  }

  render () {
    const { matches } = this.props
    return matches.length ?
      (<div className={styles.matches}>
        <div className={styles.tableTitle}>Historial de Partidas:</div>
        <table className={styles.tableMatches}>
          <thead>
          <tr>
            <th className={styles.tableHeader}>Player One</th>
            <th className={styles.tableHeader}>Player Two</th>
            <th className={styles.tableHeader}>Winner</th> 
          </tr>
          </thead>
          <tbody>{matches.map(this.renderMatch)}</tbody>
        </table>
      </div>) :
      (<div className={styles.matches}>
        <div>Cargando Historial de Partidas... </div>  
        {this.renderLoading()}
      </div>);
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