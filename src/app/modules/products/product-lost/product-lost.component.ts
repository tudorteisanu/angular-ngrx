import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as productsActions from "../store/products.actions";

@Component({
  selector: 'app-product-lost',
  templateUrl: './product-lost.component.html',
  styleUrls: ['./product-lost.component.css']
})
export class ProductLostComponent implements OnInit{
  books$: Observable<any> = this.store.select((state: any) => state.products.products);

  name: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(productsActions.loadAll());
  }

  removeBook(id: number): void {
    this.store.dispatch(productsActions.remove({ id }));
  }
}
