import {Injectable} from '@angular/core';
import {Process} from '../process';
import {environment} from '../../environments/environment';
import {GlassServiceService} from './glass-service.service';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  private serviceUrl = environment.serverHost + '/api/process';

  private service: GlassServiceService<Process>;

  processes: Process[];

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<Process>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('process');
  }

  update() {
    this.getItems()
      .subscribe(items => this.processes = items);
  }

  getItems(): Observable<Process[]> {
    return this.service.getItems();
  }

  getItem(id: number): Observable<Process> {
    return this.service.getItem(id);
  }

  deleteItem(id: number): Observable<Process> {
    return this.service.deleteItem(id);
  }

  addItem(item: Process): Observable<Process> {
    return this.service.addItem(item);
  }

  updateItem(item: Process, id: number): Observable<any> {
    return this.service.updateItem(item, id);
  }
}
