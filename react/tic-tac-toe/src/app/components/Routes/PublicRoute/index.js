import React from 'react';
import { Route } from 'react-router-dom';

function PublicRoute({ component: Component,loading, userAuthenticated, hasError, checkCredentials, ...rest }) {
  return(
    <Route {...rest} render={(props) => ( 
        <Component {...props} userAuthenticated={userAuthenticated} loading={loading} hasError={hasError} checkCredentials={checkCredentials}/>)}
    />); 
}

export default PublicRoute;
