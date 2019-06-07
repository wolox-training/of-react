import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, isAuthenticated, logout, ...rest }) {
  return(
    <Route {...rest} render={(props) => (
      isAuthenticated 
        ? <Component {...props} logout={logout} />
        : <Redirect to={{
            pathname: "/login",
            state: { from: props.location }
          }} />
    )} />
  ) 
}

export default PrivateRoute;
