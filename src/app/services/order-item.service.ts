import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {OrderItem} from '../order';
import {GlassServiceService} from './glass-service.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  private serviceUrl = environment.serverHost + '/api/order/items';
  private service: GlassServiceService<OrderItem>;

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<OrderItem>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('order-item');
  }

  getItems(): Observable<OrderItem[]> {
    return this.service.getItems();
  }

  getItem(id: number): Observable<OrderItem> {
    return this.service.getItem(id);
  }

  deleteItem(id: number): Observable<OrderItem> {
    return this.service.deleteItem(id);
  }

  addItem(item: OrderItem): Observable<OrderItem> {
    return this.service.addItem(item);
  }

  updateItem(item: OrderItem, id: number): Observable<any> {
    return this.service.updateItem(item, id);
  }
}
