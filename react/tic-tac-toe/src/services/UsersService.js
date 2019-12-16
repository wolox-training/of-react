import api from '../config/api';
import { wrapService, withPostSuccess } from 'redux-recompose';
import actionCreators from '~redux/login/actions';

const postUser = (creds) => api.post('/login', creds);

postUser.successSelector = response => response.data.token;
postUser.injections = [
  withPostSuccess((dispatch, response) => {
    window.localStorage.setItem('token', response.data.token);
    api.setHeader('Authorization', response.data.token);
    dispatch(actionCreators.setAuthenticated(true));
  }) 
];

const service = {
  postUser
};

export default wrapService(service, 'login', { postUser: 'token' });
