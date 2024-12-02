import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DELETEDELIVER_URL, DELIVERINFO_URL, DELIVERINFOCLIENT_URL } from '../shared/_models/constants/urls';
import { UserService } from './user.service';
import { Product } from '../shared/_models/product_model';

@Injectable({
  providedIn: 'root'
})
export class DeliverInformationsService {
  constructor(private http: HttpClient, private userService: UserService) { }
  
  getClientAll(): Observable<Product[]> {//管理者找客戶全部資料
    return this.userService.userObservable$.pipe(
      switchMap(user => {
        return this.http.post<Product[]>(DELIVERINFO_URL, user);
      })
    );
  }
  getClinet(email:string):Observable<Product[]>{//客戶找自己的資料
    const params = new HttpParams().set('email',email)
    return this.http.get<Product[]>(DELIVERINFOCLIENT_URL, {params})
  }
  deleteDeliver(product:Product[]):Observable<Product[]>{
    return this.http.post<Product[]>(DELETEDELIVER_URL,product)
  }
}
