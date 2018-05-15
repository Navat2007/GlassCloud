import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Order} from './order';
import {AuthService} from './auth.service';
import {environment} from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({providedIn: 'root'})
export class OrderService {

  private orderByReceprionsUrl = environment.serverHost + '/api/1/order';
  private orderUrl = environment.serverHost + '/api/order';

  constructor(
    private http: HttpClient, private as: AuthService
  ) {
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderByReceprionsUrl)
      .pipe(
        tap(orders => this.log(`fetched orders` + orders)),
        catchError(this.handleError('getOrders', []))
      );
  }

  getOrder(id: number): Observable<Order> {
    const url = `${this.orderUrl}/${id}`;
    return this.http.get<Order>(url).pipe(
      tap(_ => this.log(`fetched order id=${id}`)),
      catchError(this.handleError<Order>(`getOrder id=${id}`))
    );
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.orderUrl, order, httpOptions).pipe(
      tap((_: Order) => this.log(`added order w/ id=${order.id}`)),
      catchError(this.handleError<Order>('addOrder'))
    );
  }

  deleteOrder(order: Order | number): Observable<Order> {
    const id = typeof order === 'number' ? order : order.id;
    const url = `${this.orderUrl}/${id}`;

    return this.http.delete<Order>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted order id=${id}`)),
      catchError(this.handleError<Order>('deleteOrder'))
    );
  }

  updateOrder(order: Order): Observable<any> {
    return this.http.put(this.orderUrl, order, httpOptions).pipe(
      tap(_ => this.log(`updated order id=${order.id}`)),
      catchError(this.handleError<any>('updateOrder'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('HOrderService: ' + message);
  }
}
