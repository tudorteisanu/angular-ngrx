import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import * as productsActions from "../store/products.actions";
import {selectProducts} from "@/modules/products/store/products.selector";

@Component({
  selector: 'app-product-lost',
  templateUrl: './product-lost.component.html',
  styleUrls: ['./product-lost.component.css']
})
export class ProductLostComponent {
  books$: Observable<any> = this.store.select((state: any) => state.products.products);

  name: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(productsActions.loadAll());
  }

  create(): void {
    this.store.dispatch(productsActions.process({ product: { name: this.name }}));
  }

  removeBook(id: number): void {
    this.store.dispatch(productsActions.remove({ id }));
  }
}
