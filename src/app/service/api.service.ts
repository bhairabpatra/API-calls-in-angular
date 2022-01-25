import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { Product } from '../modle/product/product.module';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPosts():Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://jsonplaceholder.typicode.com/posts')
  }
  handleError<T>(arg0: string): (err: any, caught: import("rxjs").Observable<any>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

}

