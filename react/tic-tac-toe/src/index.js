import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from "react-router-dom";

import App from './app';
import './config/i18n';
import './scss/application.scss';
import { register } from './serviceWorker';

import { Provider } from 'react-redux';

import store from '../src/redux/store';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Router>
          <App />
        </Router>
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );
};

// Render once
render(App);

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
