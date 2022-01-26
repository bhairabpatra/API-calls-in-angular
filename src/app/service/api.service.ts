import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { Smartphone } from '../modle/Smartphone';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private REST_API_SERVER = "https://jsonplaceholder.typicode.com/posts";
  private localUrl = 'assets/data/smartphone.json';
  constructor(private httpClient: HttpClient) { }

  public getPosts():Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER).pipe(
      catchError(this.handleError)
    )
  }

  public getSmartphone(): Observable<any> {
    return this.httpClient.get<Smartphone>(this.localUrl);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

