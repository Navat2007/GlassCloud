import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Order } from './order';


@Injectable({ providedIn: 'root' })
export class OrderService {

  private orderUrl = 'http://localhost:8080/api/1/order';

  constructor(
    private http: HttpClient
  ) { }

  getOrders (): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl)
      .pipe(
        catchError(this.handleError('getOrders', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
