import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './screens/Game';
import Login from './screens/Login';

import '../scss/application.scss';

class App extends Component{
  render() {
    return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/game" component={Game} />
    </Switch>);
  };
}

export default App;
