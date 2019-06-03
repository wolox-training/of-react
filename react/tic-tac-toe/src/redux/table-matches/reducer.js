import { actions } from './actions';


const initialState = {
  matches: [],
  errorMessage: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MATCHES:
      return state;
    case actions.GET_MATCHES_SUCCESS:
      return {...state, matches : [...action.payload]}
    case actions.GET_MATCHES_FAILURE:
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
}

export default reducer;