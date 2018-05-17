import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {GlassServiceService} from './glass-service.service';
import {Order} from '../order';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private serviceUrl = environment.serverHost + '/api/order';
  private service: GlassServiceService<Order>;

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<Order>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('order');
  }

  getItems(): Observable<Order[]> {
    return this.service.getItems();
  }

  deleteItem(id: number): Observable<Order> {
    return this.service.deleteItem(id);
  }
}