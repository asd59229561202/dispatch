import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Truck } from '../shared/_models/truck_model';
import { TRUCKALLINFO_URL, TRUCKINFO_URL ,TRUCKINFOUPDATE_URL} from '../shared/_models/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  
  
  constructor(private http: HttpClient) { }

  findInfo(truckingNumber: string): Observable<Truck> {
    // Create HttpParams object with truckingNumber
    const params = new HttpParams().set('truckingNumber', truckingNumber);

    // Pass the params object as the second argument to the get method
    return this.http.get<Truck>(TRUCKINFO_URL, { params });
  }
  getAll(): Observable<Truck[]>{
    
    return this.http.get<Truck[]>(TRUCKALLINFO_URL) 
  }
  update(truckingNumber: any,productId: any,isLoading:boolean) {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    const body = {truckingNumber: truckingNumber, productId:productId,isLoading:isLoading}
    return  this.http.put(TRUCKINFOUPDATE_URL,body,{headers})
  }
}
