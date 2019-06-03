import { actions } from './actions';


const initialState = {
  matches: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MATCHES:
      return state;
    case actions.GET_MATCHES_SUCCESS:
      return {matches : [...action.payload]}
    case actions.GET_MATCHES_FAILURE:
      return state;
    default:
      return state;
  }
}

export default reducer;