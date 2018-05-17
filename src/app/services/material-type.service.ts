import {Injectable} from '@angular/core';
import {GlassServiceService} from './glass-service.service';
import {MaterialColor, MaterialType} from '../material';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialTypeService {

  private serviceUrl = environment.serverHost + '/api/material/type';

  private service: GlassServiceService<MaterialType>;
  materialTypes: MaterialType[];

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<MaterialType>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('material-type');
  }

  update() {
    this.getItems()
      .subscribe(items => this.materialTypes = items);
  }

  getItems(): Observable<MaterialType[]> {
    return this.service.getItems();
  }

  deleteItem(id: number): Observable<MaterialType> {
    return this.service.deleteItem(id);
  }

  addItem(item: MaterialType): Observable<MaterialType> {
    return this.service.addItem(item);
  }

  updateItem(item: MaterialType, id: number): Observable<any> {
    return this.service.updateItem(item, id);
  }
}
