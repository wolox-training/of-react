import Immutable from 'seamless-immutable';
import { createReducer } from 'redux-recompose';

import { actions } from './actions';

const defaultState = {
  userAuthenticated: false,
};

const reducerDescription = {
  [actions.SET_AUTHENTICATED]: (state, action) => state.merge({ userAuthenticated: action.payload }),
  [actions.SET_TOKEN]: (state, action) => state.merge({ token: action.payload }),
  [actions.LOGOUT]: (state, action) => state.merge({ token: action.payload.token, userAuthenticated: action.payload.userAuthenticated, tokenError: '' }),
};

export default createReducer(Immutable(defaultState), reducerDescription);
