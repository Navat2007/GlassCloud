import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class GlassServiceService<T> {

  private serviceUrl;
  private name = '';

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
  ) {
  }

  setUrl(url: string): GlassServiceService<T> {
    this.serviceUrl = url;
    return this;
  }

  setName(name: string): GlassServiceService<T> {
    this.name = name;
    return this;
  }

  getItems(): Observable<T[]> {
    return this.http.get<T[]>(this.serviceUrl)
      .pipe(
        tap(orders => this.logging.log(`fetched ${name}` + orders)),
        catchError(this.logging.handleError('get ${name}'))
      );
  }

  getItem(id: number): Observable<T> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<T>(url)
      .pipe(
        tap(_ => this.logging.log(`fetched ${name} id=${id}`)),
        catchError(this.logging.handleError<T>(`get ${name} id=${id}`))
      );
  }

  addItem(item: T): Observable<T> {
    return this.http.post<T>(this.serviceUrl, item)
      .pipe(
        tap((_: T) => this.logging.log(`added ${name} w/ ${item}`)),
        catchError(this.logging.handleError<T>('add ${name}'))
      );
  }

  deleteItem(id: number): Observable<T> {
    const url = `${this.serviceUrl}/${id}`;

    return this.http.delete<T>(url)
      .pipe(
        tap(_ => this.logging.log(`deleted ${name} id=${id}`)),
        catchError(this.logging.handleError<T>('delete ${name}'))
      );
  }

  updateItem(item: T, id: number): Observable<any> {
    const url = `${this.serviceUrl}/${id}`;

    return this.http.put(url, item)
      .pipe(
        tap(_ => this.logging.log(`updated order ${item}`)),
        catchError(this.logging.handleError<any>('update ${name}'))
      );
  }

  update() {

  }
}
