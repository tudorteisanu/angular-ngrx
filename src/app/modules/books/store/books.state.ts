export interface CreateBook {
  name: string;
}

export interface Book extends CreateBook{
  id: number;
}

export interface BooksState {
  books: Book[];
}

export enum BooksActionsTypes {
  loadAll = '[Books Component] loadAll',
  set = '[Books Component] set',
  add = '[Books Component] add',
  remove = '[Books Component] remove',
  process = '[Books Component] process',
}
