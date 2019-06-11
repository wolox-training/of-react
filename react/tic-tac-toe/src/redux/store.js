import { createStore, compose , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import matches from './table-matches/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(matches, composeEnhancers(applyMiddleware(thunk)));