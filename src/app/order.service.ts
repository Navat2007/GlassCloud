import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Order } from './order';


@Injectable({ providedIn: 'root' })
export class OrderService {

  private orderUrl = 'http://localhost:8080/api/1/order';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getOrders (): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }
}
