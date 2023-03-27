import { Injectable } from '@angular/core';
import {Book} from "../store/books.state";
import {HttpClient} from "@angular/common/http";
import {CreateProduct} from "../../products/store/products.state";

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {
  resourceUrl = 'books'

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Book[]>(`http://localhost:3000/${this.resourceUrl}`);
  }

  create(payload: CreateProduct) {
    return this.http.post<Book>(`http://localhost:3000/${this.resourceUrl}`, payload)
  }

  remove(id: number) {
    return this.http.delete<Book>(`http://localhost:3000/${this.resourceUrl}/${id}`)
  }
}
