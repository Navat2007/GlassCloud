import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Order} from '../order';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private serviceUrl = environment.serverHost + '/api/material';

  constructor(
    private http: HttpClient,
    private logging: LoggingService
  ) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.serviceUrl)
      .pipe(
        tap(orders => this.log(`fetched orders` + orders)),
        catchError(this.logging.handleError('getOrders'))
      );
  }

  getOrder(id: number): Observable<Order> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<Order>(url).pipe(
      tap(_ => this.log(`fetched order id=${id}`)),
      catchError(this.logging.handleError<Order>(`getOrder id=${id}`))
    );
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.serviceUrl, order).pipe(
      tap((_: Order) => this.log(`added order w/ id=${order.id}`)),
      catchError(this.logging.handleError<Order>('addOrder'))
    );
  }

  deleteOrder(order: Order | number): Observable<Order> {
    const id = typeof order === 'number' ? order : order.id;
    const url = `${this.serviceUrl}/${id}`;

    return this.http.delete<Order>(url).pipe(
      tap(_ => this.log(`deleted order id=${id}`)),
      catchError(this.logging.handleError<Order>('deleteOrder'))
    );
  }

  updateOrder(order: Order): Observable<any> {
    return this.http.put(this.serviceUrl, order).pipe(
      tap(_ => this.log(`updated order id=${order.id}`)),
      catchError(this.logging.handleError<any>('updateOrder'))
    );
  }
}
