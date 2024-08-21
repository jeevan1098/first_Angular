import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = 'http://localhost:9092/product';

  constructor(private http: HttpClient) { }
  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseURL}/add`, product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/all`);
  }

  updateProduct(product: Product): any {
    let URL = `http://localhost:9092/product/update/${product.productId}`;
    return this.http.put(URL, product);
  }
  
  deleteProduct(id: string): Observable<void> {
    const url = `${this.baseURL}/delete/${id}`;
    return this.http.delete<void>(url);
  }
}
