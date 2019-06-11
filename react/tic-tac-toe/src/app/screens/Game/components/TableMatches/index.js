import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf } from 'prop-types';

import actionsCreators from '../../../../../redux/table-matches/actions';
import Match from '../Match';
import styles from './styles.module.scss';
import Spinner from 'react-spinkit';

class TableMatches extends Component {
  componentDidMount() {
    this.props.getMatches();
  }

  renderMatch = (info) => {
    console.log(info);
    return (<Match match={info} key={info.id} />)
   } ;

  render () {
    const { matches } = this.props;
    return matches.length ? 
    (<div className={styles.matches}>
        <div>Historial de Partidas:</div>
        <table className={styles.tableMatches}>
          <thead>
            <tr>
              <th className={styles.tableChild}>Player One</th>
              <th className={styles.tableChild}>Player Two</th>
              <th className={styles.tableChild}>Winner</th> 
            </tr>
          </thead>
          <tbody>{matches.map(this.renderMatch)}</tbody>
        </table>
    </div>) : 
    (<div>
      <div>Cargando Historial de Partidas... </div>  
      <Spinner className={styles.loading} name='double-bounce' />
    </div>);
  }
}

TableMatches.propTypes = {
  matches: arrayOf(Object)
}

const mapStateToProps = store => ({
  matches: store.matches
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(actionsCreators.getMatches(dispatch)),
  loadMatches: (matches) => dispatch(actionsCreators.loadMatches(matches))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableMatches);
