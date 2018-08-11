import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {GlassServiceService} from './glass-service.service';
import {JsonItemResponse} from './jsonItem';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {LoggingService} from './logging.service';
import {Observable} from 'rxjs';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAdmin = true;


  private serviceUrl = environment.serverHost + '/api/user';

  private service: GlassServiceService<JsonItemResponse<User>, User>;
  users: User[];

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service = new GlassServiceService<JsonItemResponse<User>, User>(this.http, this.logging);
    this.service.setUrl(this.serviceUrl).setName('material-type');
  }

  update() {
    this.getItems()
      .subscribe(json => this.users = json.data.sort((a, b) => a.name < b.name ? -1 : 1));
  }

  getItems(): Observable<JsonItemResponse<User[]>> {
    return this.service.getItems();
  }

  deleteItem(id: string): Observable<JsonItemResponse<User>> {
    return this.service.deleteItem(id);
  }

  addItem(item: User): Observable<JsonItemResponse<User>> {
    return this.service.addItem(item);
  }

  updateItem(item: User, id: string): Observable<any> {
    return this.service.updateItem(item, id);
  }
}
