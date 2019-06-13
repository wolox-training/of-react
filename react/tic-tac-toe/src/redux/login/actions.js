import { createTypes } from 'redux-recompose';
import api from '../../config/api';

export const actions = createTypes(['SET_AUTHENTICATED', 'SET_TOKEN', 'LOGOUT'], '@@LOGIN');

const actionCreators = {
  setAuthenticated: (boolean) => ({
    type: actions.SET_AUTHENTICATED,
    payload: boolean
  }),
  setToken: (token) => ({
    type: actions.SET_TOKEN,
    payload: token
  }),
  logout: () => {
    api.deleteHeader('Authorization');
    window.localStorage.removeItem('token');
    return { type: actions.LOGOUT, payload: { token: '', userAuthenticated: false }};
  }
};

export default actionCreators;
