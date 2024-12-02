import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url: string, options: { params: any, responseType: string }): Observable<any> {
    const httpParams = new HttpParams({ fromObject: options.params });
    return this.http.get(url, { params: httpParams, responseType: options.responseType as 'json' });
  }
}