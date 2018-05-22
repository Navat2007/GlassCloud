import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Client, ClientType} from '../client';
import {GlassServiceService} from './glass-service.service';
import {LoggingService} from './logging.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private serviceUrl = environment.serverHost + '/api/client';
  private service: GlassServiceService<Client>;

  clients: Client[];
  clientTypes: ClientType[];

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<Client>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('client');
  }

  update() {
    this.getItems()
      .subscribe(items => {
        this.clients = items;
      });
  }

  updateTypes() {
    this.getClientTypes()
      .subscribe(items => this.clientTypes = items);
  }

  getItems(): Observable<Client[]> {
    return this.service.getItems();
  }

  getItem(id: number): Observable<Client> {
    return this.service.getItem(id);
  }

  deleteItem(id: number): Observable<Client> {
    return this.service.deleteItem(id);
  }

  addItem(item: Client): Observable<Client> {
    return this.service.addItem(item);
  }

  updateItem(item: Client, id: number): Observable<any> {
    return this.service.updateItem(item, id);
  }

  getClientTypes(): Observable<ClientType[]> {
    return this.http.get<ClientType[]>(this.serviceUrl + '/type');
  }
}
