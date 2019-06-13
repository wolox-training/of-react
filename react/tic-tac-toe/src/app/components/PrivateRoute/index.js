import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return(
    <Route {...rest} render={(props) => (
      isAuthenticated 
        ? <Component />
        : <Redirect to={{
            pathname: "/login",
            state: { from: props.location }
          }} />
    )} />
  ) 
}

export default PrivateRoute;
