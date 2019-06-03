import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: [],
  bookSearch: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        books: [...action.payload]
      };
    case actions.ADD_TO_CART:
      return {
        ...state,
        bookSelected: [...state.bookSelected, action.payload]
      };
    case actions.ADD_ITEM:
      return {
        ...state,
        bookSelected: [
          ...state.bookSelected.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          )
        ]
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        bookSelected: [
          ...state.bookSelected.reduce((array, item) => {
            if (item.id === action.payload) {
              item = { ...item, quantity: item.quantity - 1 };
              if (item.quantity === 0) return [...array];
            }
            return [...array, item];
          }, [])
        ]
      };
    case actions.SEARCH_ITEM:
      return {
        ...state,
        bookSearch: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
