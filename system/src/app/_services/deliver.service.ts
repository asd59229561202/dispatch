import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Product } from '../shared/_models/product_model';
import { CHANGEPRODUCT_URL, CREATPRODUCT_URL, DELETEDELIVER_URL } from '../shared/_models/constants/urls';

const ProductKey = 'Product';

@Injectable({
  providedIn: 'root'
})
export class DeliverService {
  private productSubject = new BehaviorSubject<Product>(this.getProductFromLocalStorage());
  public productObservable$ : Observable<Product> = this.productSubject.asObservable();

  constructor(private http: HttpClient) {}

  public get currentProduct(): Product {
    return this.productSubject.value;
  }

  create(product: Product): Observable<Product> {
    console.log('Creating product:', product);
    return this.http.post<Product>(CREATPRODUCT_URL, product).pipe(
      catchError(error => {
        console.error('Error occurred during product creation:', error);
        return throwError(() => new Error('Error occurred during product creation'));
      })
    );
  }

  findProduct(product: Product): void { 
    this.setProductFromLocalStorage(product);
    this.productSubject.next(product);
    console.log(product)
  }

  setProductFromLocalStorage(product: Product): void {
    localStorage.setItem(ProductKey, JSON.stringify(product));
  }

  getProductFromLocalStorage(): Product {
    const productJson = localStorage.getItem(ProductKey);
    return productJson ? JSON.parse(productJson) as Product : new Product(); 
  }
  clearProduct(){
    localStorage.removeItem(ProductKey);
    this.productSubject.next(new Product());
    
  }
}
