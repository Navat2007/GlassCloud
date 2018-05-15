import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MaterialType} from '../material';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialTypeService {

  private serviceUrl = environment.serverHost + '/api/material/type';

  constructor(
    private http: HttpClient,
  ) { }

  getMaterialTypes(): Observable<MaterialType[]> {
    return this.http.get<MaterialType[]>(this.serviceUrl);
  }
}
