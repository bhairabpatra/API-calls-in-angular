import { Injectable } from '@angular/core';
import { News } from '../new-model/news';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private endpoint="http://localhost:3000/news";
  constructor(private http:HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<News>(this.endpoint).pipe(
      catchError(this.handleError)
    );
  }


  getSinglenews(id: string): Observable<any> {
    return this.http.get<News>(this.endpoint + '/' + id).pipe(
      catchError(this.handleError)
    );
  }

  addNews(news: any): Observable<any> {
    return this.http.post<News>(this.endpoint , news).pipe(
      catchError(this.handleError)
    );
  }

  updateNews(id: string, product: News): Observable<any> {
    return this.http.put<News>(this.endpoint + '/' + id, product).pipe(
      catchError(this.handleError)
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<News>(this.endpoint + '/' + id).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
