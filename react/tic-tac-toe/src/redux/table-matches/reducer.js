import { actions } from './actions';


const initialState = {
  matches: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MATCHES:
      return state;
    case actions.LOAD_MATCHES:
      return {matches : [...action.payload]}
    default:
      return state;
  }
}

export default reducer;