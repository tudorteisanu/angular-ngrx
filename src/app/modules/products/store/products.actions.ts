import {createAction, props} from '@ngrx/store';
import {CreateProduct, Product, ProductsActionsTypes } from "./products.state";

const loadAll = createAction(ProductsActionsTypes.loadAll);
const set = createAction(ProductsActionsTypes.set, props<{ products: Product[] }>());
const add = createAction(ProductsActionsTypes.add, props<{ product: Product }>());
const process = createAction(ProductsActionsTypes.process, props<{ product: CreateProduct }>());
const remove = createAction(ProductsActionsTypes.remove, props<{ id: number }>());

export {loadAll, add, remove, set, process};
