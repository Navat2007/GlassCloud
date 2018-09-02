import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Order, OrderItem} from '../order';
import {GlassServiceService} from './glass-service.service';
import {HttpClient} from '@angular/common/http';
import {JsonItemResponse} from './jsonItem';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  private serviceItemsUrl = environment.serverHost + '/api/order/items';
  private serviceItems: GlassServiceService<JsonItemResponse<OrderItem>, OrderItem>;

  private serviceItemUrl = environment.serverHost + '/api/order/item';
  private serviceItem: GlassServiceService<JsonItemResponse<OrderItem>, OrderItem>;

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.serviceItems = new GlassServiceService<JsonItemResponse<OrderItem>, OrderItem>(this.http, this.logging);
    this.serviceItems.setUrl(this.serviceItemsUrl).setName('order-items');

    this.serviceItem = new GlassServiceService<JsonItemResponse<OrderItem>, OrderItem>(this.http, this.logging);
    this.serviceItem.setUrl(this.serviceItemUrl).setName('order-item');
  }

  update() {

  }

  getItems(orderId: string): Observable<JsonItemResponse<OrderItem[]>> {
    return this.serviceItems.getItemsById(orderId);
  }

  getItem(id: string): Observable<JsonItemResponse<OrderItem>> {
    return this.serviceItem.getItem(id);
  }

  deleteItem(id: string): Observable<JsonItemResponse<OrderItem>> {
    return this.serviceItem.deleteItem(id);
  }

  addItem(item: OrderItem): Observable<JsonItemResponse<OrderItem>> {
    return this.serviceItem.addItem(item);
  }

  updateItem(item: OrderItem, id: string): Observable<any> {
    return this.serviceItem.updateItem(item, id);
  }

  // ------------------------
  public recalculateItem(orderItem: OrderItem) {
    orderItem.perimeter = (orderItem.length * orderItem.width) * 2 * (orderItem.count / 1000);

    let area = (orderItem.length * orderItem.width) / 1000000;
    if (area < (0.0625 * orderItem.count)) {
      area = 0.0625 * orderItem.count;
    } else {
      area = area * orderItem.count;
    }
    const summa = area * orderItem.material.price;
    orderItem.area = area;

    let processSum = 0;
    orderItem.process.forEach(process => {
      processSum += orderItem.perimeter * process.price;
    });

    orderItem.processSum = processSum;

    orderItem.summa = summa + processSum;
  }
}
