import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {environment} from '../../environments/environment';
import {GlassServiceService} from './glass-service.service';
import {Material} from '../material';
import {Observable} from 'rxjs';
import {JsonItemResponse} from './jsonItem';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private serviceUrl = environment.serverHost + '/api/material';

  private service: GlassServiceService<JsonItemResponse<Material>, Material>;
  materials: Material[];

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<JsonItemResponse<Material>, Material>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('material');
  }

  update() {
    this.getItems()
      .subscribe(json => this.materials = json.data);
  }

  getItems(): Observable<JsonItemResponse<Material[]>> {
    return this.service.getItems();
  }

  getItem(id: string): Observable<JsonItemResponse<Material>> {
    return this.service.getItem(id);
  }

  deleteItem(id: string): Observable<JsonItemResponse<Material>> {
    return this.service.deleteItem(id);
  }

  addItem(item: Material): Observable<JsonItemResponse<Material>> {
    return this.service.addItem(item);
  }

  updateItem(item: Material, id: string): Observable<any> {
    return this.service.updateItem(item, id);
  }
}
