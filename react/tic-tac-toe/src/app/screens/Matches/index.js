import React, { Component, Fragment } from 'react';
import TableMatches from './components/TableMatches';
import Topbar from '../../components/Topbar';
import withLoading from '../../../utils/withLoading';

import { connect } from 'react-redux';
import { arrayOf } from 'prop-types';

import MatchesService from '../../../services/MatchesService';
import styles from './styles.module.scss';

class Matches extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(MatchesService.getMatches());
  }

  render(){
    const { logout, history } = this.props;
    const WithLoadingTableMatches = withLoading(TableMatches);
    return (
    <Fragment>
      <Topbar logout={logout} history={history} />
      <div className={styles.matchesTitle}>Historial de Partidas:</div>
      <WithLoadingTableMatches matches={this.props.matches} isLoading={this.props.isLoading} type="text" />
    </Fragment>
    );
  }
}

Matches.defaultProps = {
  matches: [],
  isLoading: true,
};

Matches.propTypes = {
  matches: arrayOf(Object),
}

const mapStateToProps = store => ({
  matches: store.matches.matches,
  isLoading: !store.matches.matches ? true : !store.matches.matches.length ? true : false,
});

export default connect(mapStateToProps)(Matches);

