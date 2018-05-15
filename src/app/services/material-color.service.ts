import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MaterialColor} from '../material';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialColorService {

  private serviceUrl = environment.serverHost + '/api/material/color';

  constructor(
    private http: HttpClient,
  ) { }

  getMaterialColors(): Observable<MaterialColor[]> {
    return this.http.get<MaterialColor[]>(this.serviceUrl);
  }

  getMaterialColor(id: number): Observable<MaterialColor> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<MaterialColor>(url);
  }

  addMaterialColor(material: MaterialColor): Observable<MaterialColor> {
    return this.http.post<MaterialColor>(this.serviceUrl, material);
  }

  deleteMaterialColor(material: MaterialColor | number): Observable<MaterialColor> {
    const id = typeof material === 'number' ? material : material.id;
    const url = `${this.serviceUrl}/${id}`;

    return this.http.delete<MaterialColor>(url);
  }

  updateMaterialColor(material: MaterialColor): Observable<any> {
    return this.http.put(this.serviceUrl, material);
  }
}
