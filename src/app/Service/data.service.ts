import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/Product';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:5240/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Store/GetProducts`)
      .pipe(
        map(result => result)
      );
  }
  getProductById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${productId}`);
  }
  

  getBrands(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Store/GetBrand`);
  }

  getProductTypes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Store/ProductTypes`);
  }
  addProduct(product: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}Store/AddProductv4`, product);
  }
  getProductCountByBrand(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Report/CountByBrand`);
  }

  getProductCountByType(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Report/CountByType`);
  }
  getActiveProductsReport(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Report/ActiveProductsReport`);
  }

  register(user: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}Auth/Register`, user);
  }

  login(user: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}Auth/Login`, user);
  }
}
