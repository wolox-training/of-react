import { postUser } from '../../services/UsersService';

export const actions = {
  POST_USER: '@@MLOGIN/POST_USER',
  POST_USER_SUCCESS: '@@LOGIN/POST_USER_SUCCESS',
  POST_USER_FAILURE: '@@LOGIN/POST_USER_FAILURE'
};

const actionsCreators = {
  postUser: (email,password) => (async dispatch => {
    const response = await postUser(email,password);
    if (response.ok) dispatch(actionsCreators.postUserSuccess(response.data));
    else dispatch(actionsCreators.postUserFailure(response.problem));
  }),
  postUserSuccess: (token) => ({
    type: actions.POST_USER_SUCCESS,
    payload: {token, userAuthenticated: true}
  }),
  postUserFailure: (problem) => ({
    type: actions.POST_USER_FAILURE,
    payload: {problem, userAuthenticated: false }
  })
};

export default actionsCreators;