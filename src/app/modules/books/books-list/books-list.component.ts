import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as booksActions from "../store/books.actions";
import * as productsActions from "../../products/store/products.actions";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  books$: Observable<any> = this.store.select((state: any) => state.books.books);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(booksActions.loadAll());
  }

  removeBook(id: number): void {
    this.store.dispatch(booksActions.remove({ id }));
  }
}
