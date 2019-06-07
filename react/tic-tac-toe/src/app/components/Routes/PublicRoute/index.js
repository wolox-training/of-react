import React from 'react';
import { Route } from 'react-router-dom';

function PublicRoute({ component: Component,loading, userAuthenticated, error, checkCredentials, ...rest }) {
  return(
    <Route {...rest} render={(props) => ( 
        <Component {...props} userAuthenticated={userAuthenticated} loading={loading} hasError={error} checkCredentials={checkCredentials}/>)}
    />); 
}

export default PublicRoute;
