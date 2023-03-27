import {createFeature, createReducer, on} from '@ngrx/store';
import * as actionTypes from './products.actions';
import {ProductsState} from "./products.state";

export const PRODUCTS_FEATURE_KEY = 'products';

const initialState: ProductsState = {
  [PRODUCTS_FEATURE_KEY]: [],
};

const reducer = createReducer(
  initialState,
  on(actionTypes.set, (state, { products }) => ({
    ...state,
    products,
  })),
  on(actionTypes.add, (state, { product }) => ({
    ...state,
    [PRODUCTS_FEATURE_KEY]: [...state[PRODUCTS_FEATURE_KEY], product],
  })),
  on(actionTypes.remove, (state, { id }) => ({
    ...state,
    [PRODUCTS_FEATURE_KEY]: state[PRODUCTS_FEATURE_KEY].filter(book => book.id !== id),
  }))
);

export const productsReducer = createFeature({
  name: PRODUCTS_FEATURE_KEY,
  reducer
})
