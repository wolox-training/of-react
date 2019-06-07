import { actions } from './actions';

const initialState = {
  open: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.TOOGLE_CONTENT:
      return {
        open: !state.open
      };
    default:
      return state;
  }
}

export default reducer;
