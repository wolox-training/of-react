import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from './screens/Game';
import Login from './screens/Login';

import '../scss/application.scss';

function App() {
  //return <Game />;
  return ( <Router>
    <div>
      <Route path="/login" component={Login} />
      <Route path="/tic-tac-toe" component={Game} />
    </div>
    
  </Router>);
}

export default App;
