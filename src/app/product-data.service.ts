import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './products/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  public prodData: Observable<any>;
  private _productsUrl = 'http://localhost:3001/products';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this._productsUrl);
  }
  getProdDetails(id: any) {
    let productURL = `${this._productsUrl}/${id}`;
    let url = productURL;
    console.log(productURL);
    return this.http.get(url);
  }
  addProduct(obj: Product): Observable<Product> {
    console.log(obj);
    return this.http.post<Product>('http://localhost:3001/products', obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  deleteProduct(id: number): Observable<void> {
    let endPoint = id;

    return this.http.delete<void>('http://localhost:3001/products/' + endPoint);
  }
  updateProduct(id: number, obj: Product): Observable<Product> {
    return this.http.put<Product>('http://localhost:3001/products/' + id, obj);
  }
}
