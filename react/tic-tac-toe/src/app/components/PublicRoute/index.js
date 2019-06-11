import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, loading, userAuthenticated, error, checkCredentials, ...rest }) {
  return(
    <Route {...rest} render={(props) => (
      (userAuthenticated && !loading)
        ? <Redirect to={{
            pathname: "/game",
            state: { from: props.location }
          }} />
        : <Component {...props} loading={loading} hasError={error} checkCredentials={checkCredentials}/>)}
    />)
}

export default PublicRoute;

