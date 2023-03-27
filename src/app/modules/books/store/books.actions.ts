import {createAction, props} from '@ngrx/store';
import {Book, CreateBook, BooksActionsTypes} from "./books.state";

const loadAll = createAction(BooksActionsTypes.loadAll);
const set = createAction(BooksActionsTypes.set, props<{ books: Book[] }>());
const add = createAction(BooksActionsTypes.add, props<{ book: Book }>());
const process = createAction(BooksActionsTypes.process, props<{ book: CreateBook }>());
const remove = createAction(BooksActionsTypes.remove, props<{ id: number }>());

export {loadAll, add, remove, set, process};
