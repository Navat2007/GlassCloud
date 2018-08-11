import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {GlassServiceService} from './glass-service.service';
import {MaterialColor} from '../material';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {Observable} from 'rxjs';
import {JsonItemResponse} from './jsonItem';

@Injectable({
  providedIn: 'root'
})
export class MaterialColorService {

  private serviceUrl = environment.serverHost + '/api/material/color';

  private service: GlassServiceService<JsonItemResponse<MaterialColor>, MaterialColor>;

  materialColors: MaterialColor[];

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<JsonItemResponse<MaterialColor>, MaterialColor>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('material-color');
  }

  update() {
    this.getItems()
      .subscribe(json => this.materialColors = json.data);
  }

  getItems(): Observable<JsonItemResponse<MaterialColor[]>> {
    return this.service.getItems();
  }

  deleteItem(id: number): Observable<JsonItemResponse<MaterialColor>> {
    return this.service.deleteItem(id);
  }


  addItem(item: MaterialColor): Observable<JsonItemResponse<MaterialColor>> {
    return this.service.addItem(item);
  }

  updateItem(item: MaterialColor, id: number): Observable<any> {
    return this.service.updateItem(item, id);
  }
}
