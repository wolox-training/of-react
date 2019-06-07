import React, { Component } from 'react';

//import styles from './styles.module.scss';
import TableMatches from './components/TableMatches';
import Topbar from '../../components/Topbar';

class Matches extends Component {
  render() {
    return (
      <>
        <Topbar logout={this.props.logout} history={this.props.history} />
        <TableMatches />
      </>
  );
  }
}

export default Matches;
