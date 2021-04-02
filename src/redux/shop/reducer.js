import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  items: [],
  cart: [],
  filter: {},
  isLoading: false,
  cartIsLoading: false,
};

// const items = (state = initialState.items, action) => state;

const shopCartAdd = (state, action) => [...state, action.payload];

const shopCartDelete = (state, action) =>
  state.filter(({ productId }) => productId !== action.payload);

const cartIncrement = (state, action) =>
  state.map(item =>
    item.id === action.payload
      ? {
          ...item,
          count: item.count + 1,
        }
      : item,
  );

const cartDecrement = (state, action) =>
  state.map(item =>
    item.id === action.payload
      ? {
          ...item,
          count: item.count - 1 < 0 ? 0 : item.count - 1,
        }
      : item,
  );

const items = createReducer(initialState.items, {
  [actions.shopItemsSuccess]: (state, action) => action.payload,
});

const isLoading = createReducer(initialState.isLoading, {
  [actions.shopItemsRequest]: () => true,
  [actions.shopItemsSuccess]: () => false,
  [actions.shopItemsFailure]: () => false,
});

const cartIsLoading = createReducer(initialState.cartIsLoading, {
  [actions.cartItemsRequest]: () => true,
  [actions.cartItemsSuccess]: () => false,
  [actions.cartItemsFailure]: () => false,
});

const cart = createReducer(initialState.cart, {
  [actions.cartItemsSuccess]: (_, action) => action.payload,
  [actions.shopCartAdd.type]: shopCartAdd,
  [actions.shopCartDelete.type]: shopCartDelete,
  [actions.cartIncrement.type]: cartIncrement,
  [actions.cartDecrement.type]: cartDecrement,
});

const filter = createReducer(initialState.filter, {
  [actions.shopFilterSet.type]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  cart,
  filter,
  isLoading,
  cartIsLoading,
});
