import { actions } from './actions';


const initialState = {
  userAuthenticated: false,
  token: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.POST_USER:
      return state;
    case actions.POST_USER_SUCCESS:
      return { token : action.payload.token , userAuthenticated: action.payload.userAuthenticated}
    case actions.GET_MATCHES_FAILURE:
      return { userAuthenticated: action.payload.userAuthenticated };
    default:
      return state;
  }
}

export default reducer;