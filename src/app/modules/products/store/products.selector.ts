import {createFeatureSelector, createSelector} from "@ngrx/store";

const featureKey = 'products';

const featureSelector = createFeatureSelector(featureKey)

export const selectProducts = createSelector(
  featureSelector,
  (state: any) => state.products
);
