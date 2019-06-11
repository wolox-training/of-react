import React, { Component } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Game from './screens/Game';
import Login from './screens/Login';
import Matches from './screens/Matches';
import api from '../config/api';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import { connect } from 'react-redux';
import actionsCreators from '../redux/login/actions';
import '../scss/application.scss';

class App extends Component{
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.props.setAuthenticated(true);
      this.props.setToken(token);
      api.setHeader('Authorization',token);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/login" component={Login} userAuthenticated={this.props.userAuthenticated} loading={this.props.loading} hasError={this.props.errorMessage==='' ? false : true} checkCredentials={this.props.checkCredentials} />
          <PrivateRoute path="/game" component={Game} isAuthenticated={this.props.userAuthenticated} goToMatches={this.goToMatches} />
          <PrivateRoute path="/matches" component={Matches} isAuthenticated={this.props.userAuthenticated} goToMatches={this.goToMatches}/>
        </Switch>
      </BrowserRouter>);
  };
}

const mapStateToProps = store => ({
  userAuthenticated: store.login.userAuthenticated,
  loading: store.login.loading,
  errorMessage: store.login.errorMessage
})

const mapDispatchToProps = dispatch => ({
  checkCredentials: ({email, password}) => dispatch(actionsCreators.postUser(email,password)),
  setAuthenticated: (boolean) => dispatch(actionsCreators.setAuthenticated(boolean)),
  setToken: (token) => dispatch(actionsCreators.setToken(token)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
