import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {environment} from '../../environments/environment';
import {GlassServiceService} from './glass-service.service';
import {Material} from '../material';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private serviceUrl = environment.serverHost + '/api/material';

  private service: GlassServiceService<Material>;
  materials: Material[];

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<Material>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('material');
  }

  update() {
    this.getItems()
      .subscribe(items => this.materials = items);
  }

  getItems(): Observable<Material[]> {
    return this.service.getItems();
  }

  deleteItem(id: number): Observable<Material> {
    return this.service.deleteItem(id);
  }

  addItem(item: Material): Observable<Material> {
    return this.service.addItem(item);
  }

  updateItem(item: Material, id: number): Observable<any> {
    return this.service.updateItem(item, id);
  }
}
