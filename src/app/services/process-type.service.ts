import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {GlassServiceService} from './glass-service.service';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {ProcessType} from '../process';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessTypeService {

  private serviceUrl = environment.serverHost + '/api/process/type';

  private service: GlassServiceService<ProcessType>;

  processTypes: ProcessType[];

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<ProcessType>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('process-type');
  }

  update() {
    this.getItems()
      .subscribe(items => this.processTypes = items);
  }

  getItems(): Observable<ProcessType[]> {
    return this.service.getItems();
  }

  deleteItem(id: number): Observable<ProcessType> {
    return this.service.deleteItem(id);
  }

  addItem(item: ProcessType): Observable<ProcessType> {
    return this.service.addItem(item);
  }

  updateItem(item: ProcessType, id: number): Observable<any> {
    return this.service.updateItem(item, id);
  }
}
