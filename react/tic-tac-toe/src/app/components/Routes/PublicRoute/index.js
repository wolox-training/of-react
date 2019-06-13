import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, loading, userAuthenticated, ...rest }) {
  return(
    <Route {...rest} render={(props) => (
      (userAuthenticated && !loading)
        ? <Redirect to={{
            pathname: "/game",
            state: { from: props.location }
          }} />
        : <Component {...props} />)}
    />)
}

export default PublicRoute;
