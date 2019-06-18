import { actions } from './actions';


const initialState = {
  userAuthenticated: false,
  loading: false,
  token: '',
  errorMessage: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.POST_USER_SUCCESS:
      return { ...state, token : action.payload.token , userAuthenticated: action.payload.userAuthenticated, loading: false}
    case actions.POST_USER_FAILURE:
      return { ...state, userAuthenticated: action.payload.userAuthenticated, loading: false, errorMessage: action.payload.errorMessage };
    case actions.SET_LOADING:
      return { ...state, loading: action.payload.loading };
    case actions.SET_AUTHENTICATED:
      return {...state, userAuthenticated: action.payload}
    case actions.SET_TOKEN:
      return {...state, token: action.payload};
    case actions.LOGOUT:
      return {...state, token: action.payload.token, userAuthenticated: action.payload.userAuthenticated, errorMessage: action.payload.errorMessage};
    default:
      return state;
  }
}

export default reducer;
