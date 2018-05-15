import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {Material} from '../material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private serviceUrl = environment.serverHost + '/api/material';

  constructor(
    private http: HttpClient,
    private logging: LoggingService
  ) { }

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this.serviceUrl)
      .pipe(
        tap(materials => this.logging.log(`fetched materials` + materials)),
        catchError(this.logging.handleError('getMaterials'))
      );
  }

  getMaterial(id: number): Observable<Material> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<Material>(url).pipe(
      tap(_ => this.logging.log(`fetched material id=${id}`)),
      catchError(this.logging.handleError<Material>(`getMaterial id=${id}`))
    );
  }

  addMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(this.serviceUrl, material).pipe(
      tap((_: Material) => this.logging.log(`added material w/ id=${material.id}`)),
      catchError(this.logging.handleError<Material>('addMaterial'))
    );
  }

  deleteMaterial(material: Material | number): Observable<Material> {
    const id = typeof material === 'number' ? material : material.id;
    const url = `${this.serviceUrl}/${id}`;

    return this.http.delete<Material>(url).pipe(
      tap(_ => this.logging.log(`deleted material id=${id}`)),
      catchError(this.logging.handleError<Material>('deleteMaterial'))
    );
  }

  updateMaterials(material: Material): Observable<any> {
    return this.http.put(this.serviceUrl, material).pipe(
      tap(_ => this.logging.log(`updated material id=${material.id}`)),
      catchError(this.logging.handleError<any>('updateMaterial'))
    );
  }
}
