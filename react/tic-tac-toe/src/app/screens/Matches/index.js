import React, { Fragment } from 'react';
import TableMatches from './components/TableMatches';
import Topbar from '../../components/Topbar';

function Matches({ logout, history }) {
    return (
      <Fragment>
        <Topbar logout={logout} history={history} />
        <TableMatches />
      </Fragment>
  );
}

export default Matches;
