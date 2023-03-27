export interface CreateProduct {
  name: string;
}

export interface Product extends CreateProduct{
  id: number;
}

export interface ProductsState {
  products: Product[];
}

export enum ProductsActionsTypes {
  loadAll = '[Products Component] loadAll',
  set = '[Products Component] set',
  add = '[Products Component] add',
  remove = '[Products Component] remove',
  process = '[Products Component] process',
}
