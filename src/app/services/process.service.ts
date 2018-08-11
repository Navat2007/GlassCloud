import {Injectable} from '@angular/core';
import {Process} from '../process';
import {environment} from '../../environments/environment';
import {GlassServiceService} from './glass-service.service';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {Observable} from 'rxjs';
import {JsonItemResponse} from './jsonItem';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  private serviceUrl = environment.serverHost + '/api/process';

  private service: GlassServiceService<JsonItemResponse<Process>, Process>;

  processes: Process[];

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<JsonItemResponse<Process>, Process>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('process');
  }

  update() {
    this.getItems()
      .subscribe(json => this.processes = json.data);
  }

  getItems(): Observable<JsonItemResponse<Process[]>> {
    return this.service.getItems();
  }

  getItem(id: number): Observable<JsonItemResponse<Process>> {
    return this.service.getItem(id);
  }

  deleteItem(id: number): Observable<JsonItemResponse<Process>> {
    return this.service.deleteItem(id);
  }

  addItem(item: Process): Observable<JsonItemResponse<Process>> {
    return this.service.addItem(item);
  }

  updateItem(item: Process, id: number): Observable<any> {
    return this.service.updateItem(item, id);
  }
}
