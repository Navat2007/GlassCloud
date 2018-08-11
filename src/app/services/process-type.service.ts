import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {GlassServiceService} from './glass-service.service';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {ProcessType} from '../process';
import {Observable} from 'rxjs';
import {JsonItemResponse} from './jsonItem';

@Injectable({
  providedIn: 'root'
})
export class ProcessTypeService {

  private serviceUrl = environment.serverHost + '/api/process/type';

  private service: GlassServiceService<JsonItemResponse<ProcessType>, ProcessType>;

  processTypes: ProcessType[];

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<JsonItemResponse<ProcessType>, ProcessType>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('process-type');
  }

  update() {
    this.getItems()
      .subscribe(json => this.processTypes = json.data.sort((a, b) => a.name < b.name ? -1 : 1));
  }

  getItems(): Observable<JsonItemResponse<ProcessType[]>> {
    return this.service.getItems();
  }

  deleteItem(id: string): Observable<JsonItemResponse<ProcessType>> {
    return this.service.deleteItem(id);
  }

  addItem(item: ProcessType): Observable<JsonItemResponse<ProcessType>> {
    return this.service.addItem(item);
  }

  updateItem(item: ProcessType, id: string): Observable<any> {
    return this.service.updateItem(item, id);
  }

  getById(typeId: string) {
    return this.processTypes.find(e => e.id === typeId);
  }
}
