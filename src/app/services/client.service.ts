import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Client, ClientType} from '../client';
import {GlassServiceService} from './glass-service.service';
import {LoggingService} from './logging.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JsonItemResponse} from './jsonItem';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private serviceUrl = environment.serverHost + '/api/client';
  private service: GlassServiceService<JsonItemResponse<Client>, Client>;

  clients: Client[];
  clientTypes: ClientType[];

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<JsonItemResponse<Client>, Client>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('client');
  }

  update() {
    this.getItems()
      .subscribe(json => {
        this.clients = json.data;
      });
  }

  updateTypes() {
    this.getClientTypes()
      .subscribe(json => this.clientTypes = json.data);
  }

  getItems(): Observable<JsonItemResponse<Client[]>> {
    return this.service.getItems();
  }

  getItem(id: string): Observable<JsonItemResponse<Client>> {
    return this.service.getItem(id);
  }

  deleteItem(id: string): Observable<JsonItemResponse<Client>> {
    return this.service.deleteItem(id);
  }

  addItem(item: Client): Observable<JsonItemResponse<Client>> {
    return this.service.addItem(item);
  }

  updateItem(item: Client, id: string): Observable<any> {
    return this.service.updateItem(item, id);
  }

  getClientTypes(): Observable<JsonItemResponse<ClientType[]>> {
    return this.http.get<JsonItemResponse<ClientType[]>>(this.serviceUrl + '/type');
  }

  getById(typeId: string) {
    return this.clientTypes.find(c => c.id === typeId);
  }
}
