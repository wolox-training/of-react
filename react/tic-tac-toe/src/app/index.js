import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Game from './screens/Game';
import Login from './screens/Login';
import PrivateRoute from './components/PrivateRoute';
import { connect } from 'react-redux';
import actionsCreators from '../redux/login/actions';
import '../scss/application.scss';

class App extends Component{
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" render={(routeProps) => (<Login {...routeProps} userAuthenticated={this.props.userAuthenticated} loading={this.props.loading} hasError={this.props.error} checkCredentials={this.props.checkCredentials} />)} />
        <PrivateRoute path="/game" component={Game} isAuthenticated={this.props.userAuthenticated}/>
      </Switch>
    </BrowserRouter>);
  };
}

const mapStateToProps = store => ({
  userAuthenticated: store.login.userAuthenticated,
  loading: store.login.loading,
  error: store.login.error
})

const mapDispatchToProps = dispatch => ({
  checkCredentials: ({email, password}) => dispatch(actionsCreators.postUser(email,password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
