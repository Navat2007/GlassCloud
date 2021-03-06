import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {GlassServiceService} from './glass-service.service';
import {Order} from '../order';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {JsonItemResponse} from './jsonItem';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[];

  private serviceUrl = environment.serverHost + '/api/order';
  private service: GlassServiceService<JsonItemResponse<Order>, Order>;

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<JsonItemResponse<Order>, Order>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('order');
  }

  update() {
    this.getItems();
  }

  getItems() {
    this.service.getItems()
      .subscribe(json => this.orders = json.data.filter(order => !order.deleted));
  }

  getItem(id: string): Observable<JsonItemResponse<Order>> {
    return this.service.getItem(id);
  }

  deleteItem(id: string): Observable<JsonItemResponse<Order>> {
    this.orders = this.orders.filter(h => h.id !== id);
    return this.service.deleteItem(id);
  }

  addItem(item: Order): Observable<JsonItemResponse<Order>> {
    return this.service.addItem(item);
  }

  updateItem(item: Order, id: string): Observable<any> {
    return this.service.updateItem(item, id);
  }

//  ----------------
  public recalculateOrder(order: Order): Observable<JsonItemResponse<Order>> {
    return this.http.post<JsonItemResponse<Order>>(this.serviceUrl + '/calculate', order)
      .pipe(
        tap(_ => this.logging.log(`added ${name} w/ ${order}`)),
        catchError(this.logging.handleError<any>('calculate order'))
      );
  }
}
