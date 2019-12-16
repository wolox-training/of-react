import matches from './matches/reducer';
import login from './login/reducer'
import { reducer as formReducer } from 'redux-form';
import { createStore, applyMiddleware, compose, combineReducers as CR } from 'redux';
import { fetchMiddleware, configureMergeState, wrapCombineReducers } from 'redux-recompose';
import thunk from 'redux-thunk';

configureMergeState((state, diff) => state.merge(diff));

const combineReducers = wrapCombineReducers(CR);

const reducers = combineReducers({
  matches,
  login,
  form:formReducer
});

const middlewares = [thunk, fetchMiddleware];
const enhancers = [
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
];

const store = createStore(reducers, compose(...enhancers));

export default store;
