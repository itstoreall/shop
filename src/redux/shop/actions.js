import { createAction } from '@reduxjs/toolkit';

export const shopFilterSet = createAction('shop/filter/set');
export const shopCartAdd = createAction('shop/cart/add');
export const shopCartDelete = createAction('shop/cart/delete');
export const cartIncrement = createAction('cart/increment');
export const cartDecrement = createAction('cart/decrement');

export const shopItemsRequest = createAction('shop/items/request');
export const shopItemsSuccess = createAction('shop/items/success');
export const shopItemsFailure = createAction('shop/items/failure');

export const cartItemsRequest = createAction('shop/cart/request');
export const cartItemsSuccess = createAction('shop/cart/success');
export const cartItemsFailure = createAction('shop/cart/failure');
