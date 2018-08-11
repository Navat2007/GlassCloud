import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {OrderItem} from '../order';
import {GlassServiceService} from './glass-service.service';
import {HttpClient} from '@angular/common/http';
import {JsonItemResponse} from './jsonItem';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  private serviceUrl = environment.serverHost + '/api/order/items';
  private service: GlassServiceService<JsonItemResponse<OrderItem>, OrderItem>;

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<JsonItemResponse<OrderItem>, OrderItem>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('order-item');
  }

  update() {

  }

  getItems(): Observable<JsonItemResponse<OrderItem[]>> {
    return this.service.getItems();
  }

  getItem(id: number): Observable<JsonItemResponse<OrderItem>> {
    return this.service.getItem(id);
  }

  deleteItem(id: number): Observable<JsonItemResponse<OrderItem>> {
    return this.service.deleteItem(id);
  }

  addItem(item: OrderItem): Observable<JsonItemResponse<OrderItem>> {
    return this.service.addItem(item);
  }

  updateItem(item: OrderItem, id: number): Observable<any> {
    return this.service.updateItem(item, id);
  }
}
