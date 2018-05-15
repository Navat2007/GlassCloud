import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {Order} from '../order';
import {environment} from '../../environments/environment';
import {ReceptionService} from './reception.service';
import {LoggingService} from './logging.service';

@Injectable({providedIn: 'root'})
export class OrderService implements OnInit {

  private serviceUrl = environment.serverHost + '/api/order';

  constructor(
    private http: HttpClient,
    private receptionService: ReceptionService,
    private logging: LoggingService
  ) {
  }

  ngOnInit(): void {
    // this.receptionService.getCurrentReception()
    //   .subscribe(currentReception => {
    //     const id = currentReception.id;
    //     this.orderByReceptionsUrl = environment.serverHost + '/api/ ' + id + '/order';
    //   });
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.serviceUrl)
      .pipe(
        tap(orders => this.logging.log(`fetched orders` + orders)),
        catchError(this.logging.handleError('getOrders'))
      );
  }

  getOrder(id: number): Observable<Order> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<Order>(url)
      .pipe(
        tap(_ => this.logging.log(`fetched order id=${id}`)),
        catchError(this.logging.handleError<Order>(`getOrder id=${id}`))
      );
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.serviceUrl, order)
      .pipe(
      tap((_: Order) => this.logging.log(`added order w/ id=${order.id}`)),
      catchError(this.logging.handleError<Order>('addOrder'))
    );
  }

  deleteOrder(order: Order | number): Observable<Order> {
    const id = typeof order === 'number' ? order : order.id;
    const url = `${this.serviceUrl}/${id}`;

    return this.http.delete<Order>(url)
      .pipe(
      tap(_ => this.logging.log(`deleted order id=${id}`)),
      catchError(this.logging.handleError<Order>('deleteOrder'))
    );
  }

  updateOrder(order: Order): Observable<any> {
    return this.http.put(this.serviceUrl, order).pipe(
      tap(_ => this.logging.log(`updated order id=${order.id}`)),
      catchError(this.logging.handleError<any>('updateOrder'))
    );
  }
}
