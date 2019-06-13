import { postUser } from '../../services/UsersService';
import api from '../../config/api';

export const actions = {
  POST_USER: '@@LOGIN/POST_USER',
  POST_USER_SUCCESS: '@@LOGIN/POST_USER_SUCCESS',
  POST_USER_FAILURE: '@@LOGIN/POST_USER_FAILURE',
  SET_LOADING: '@@LOGIN/SET_LOADING',
  SET_AUTHENTICATED: '@@LOGIN/SET_AUTHENTICATED',
  SET_TOKEN: '@@LOGIN/SET_TOKEN',
  LOGOUT: '@@LOGIN/LOGOUT'
};

const actionsCreators = {
  postUser: (email,password) => (async dispatch => {
    dispatch(actionsCreators.setLoading(true));
    const response = await postUser(email,password);
    if (response.ok) {
      window.localStorage.setItem('token', response.data.token);
      api.setHeader('Authorization', response.data.token);
      dispatch(actionsCreators.postUserSuccess(response.data.token));
    }
    else dispatch(actionsCreators.postUserFailure(response.problem));
  }),
  postUserSuccess: (token) => ({
    type: actions.POST_USER_SUCCESS,
    payload: {token, userAuthenticated: true}
  }),
  postUserFailure: (problem) => ({
    type: actions.POST_USER_FAILURE,
    payload: {userAuthenticated: false, errorMessage: problem}
  }),
  setLoading: (load) => ({
    type: actions.SET_LOADING,
    payload: {loading: load}
  }),
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
    return { type: actions.LOGOUT, payload: { token: '', userAuthenticated: false, errorMessage:''}};
  }
};

export default actionsCreators;
