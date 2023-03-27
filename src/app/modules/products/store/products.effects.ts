import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import {Product} from "./products.state";
import {ProductsApiService} from "../services/products-api.service";
import * as ProductsActionsTypes from './products.actions'

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActionsTypes.loadAll),
      exhaustMap(() =>
        this.productService.getAll().pipe(
          map((products: Product[]) => {
            return ProductsActionsTypes.set({ products });
          })
        )
      )
    )
  );

  removeBooks = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActionsTypes.remove),
      exhaustMap((action) =>
        this.productService.remove(action.id).pipe(
          map(({id}) => {
            return ProductsActionsTypes.remove({ id });
          })
        )
      )
    )
  );

  addBooks = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActionsTypes.process),
      exhaustMap((action) =>
        this.productService.create(action.product).pipe(
          map((product: Product) => {
            console.log(product)
            return ProductsActionsTypes.add({ product });
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private productService: ProductsApiService) {}
}
