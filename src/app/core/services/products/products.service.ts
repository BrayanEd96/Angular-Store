import { Injectable } from '@angular/core';
import { Product } from '../../../products/components/product/product.model';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {

  }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  addProduct(product: Product ) {
    return this.http.post<Product>(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, product: Partial<Product>){
    return this.http.put(`${environment.url_api}/products/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}

