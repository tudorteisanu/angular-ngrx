import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateProduct, Product} from "../store/products.state";

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  resourceUrl = 'products'
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(`http://localhost:3000/${this.resourceUrl}`);
  }

  create(payload: CreateProduct) {
    return this.http.post<Product>(`http://localhost:3000/${this.resourceUrl}`, payload)
  }

  remove(id: number) {
    return this.http.delete<Product>(`http://localhost:3000/${this.resourceUrl}/${id}`)
  }
}
