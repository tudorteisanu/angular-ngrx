import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import {Book} from "./books.state";
import {BooksApiService} from "../services/books-api.service";
import * as BooksActionsTypes from './books.actions'

@Injectable()
export class BooksEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActionsTypes.loadAll),
      exhaustMap(() =>
        this.booksService.getAll().pipe(
          map((books: Book[]) => {
            return BooksActionsTypes.set({ books });
          })
        )
      )
    )
  );

  removeBooks = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActionsTypes.remove),
      exhaustMap((action) =>
        this.booksService.remove(action.id).pipe(
          map(({id}) => {
            return BooksActionsTypes.remove({ id });
          })
        )
      )
    )
  );

  addBooks = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActionsTypes.process),
      exhaustMap((action) =>
        this.booksService.create(action.book).pipe(
          map((book: Book) => {
            return BooksActionsTypes.add({ book });
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private booksService: BooksApiService) {}
}
