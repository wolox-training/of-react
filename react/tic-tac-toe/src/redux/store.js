import { createStore, compose , applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import matches from './table-matches/reducer';
import login from './login/reducer'
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    login,
    matches,
    form:formReducer
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));