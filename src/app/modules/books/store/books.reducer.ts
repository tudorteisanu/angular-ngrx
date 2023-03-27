import {createFeature, createReducer, on} from '@ngrx/store';
import * as actionTypes from './books.actions';
import {BooksState} from "./books.state";

export const PRODUCTS_FEATURE_KEY = 'books';

const initialState: BooksState = {
  [PRODUCTS_FEATURE_KEY]: [],
};

const reducer = createReducer(
  initialState,
  on(actionTypes.set, (state, { books }) => ({
    ...state,
    books,
  })),
  on(actionTypes.add, (state, { book }) => ({
    ...state,
    [PRODUCTS_FEATURE_KEY]: [book, ...state[PRODUCTS_FEATURE_KEY]],
  })),
  on(actionTypes.remove, (state, { id }) => ({
    ...state,
    [PRODUCTS_FEATURE_KEY]: state[PRODUCTS_FEATURE_KEY].filter(book => book.id !== id),
  }))
);

export const booksReducer = createFeature({
  name: PRODUCTS_FEATURE_KEY,
  reducer
})
