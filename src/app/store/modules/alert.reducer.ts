import {createReducer, on} from "@ngrx/store";
import * as actionTypes from "./alert.actions";
import {AlertState} from "./alert.state";

const initialState: AlertState = {
  items: []
}

export const alertReducer = createReducer(
  initialState,
  on(actionTypes.show, (state, { alert }) => ({
    ...state,
    items: [...state.items, {...alert, id: Math.random()}],
  })),
  on(actionTypes.hide, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id),
  }))
);
