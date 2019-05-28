import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: [],
  search: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        books: [...action.payload]
      };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return { ...state };
    case actions.ADD_ITEM: // TODO to implement the logic
      return { ...state };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return { ...state };
    case actions.SEARCH_ITEM:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
