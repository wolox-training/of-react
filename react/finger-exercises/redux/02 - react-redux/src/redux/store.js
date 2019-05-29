import { createStore, compose, combineReducers } from 'redux';

import books from './book/reducer';
import shoppingCart from './shopping-cart/reducer';

const reducer = combineReducers({
  books,
  shoppingCart
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(reducer, composeEnhancers());
