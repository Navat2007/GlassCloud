import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Reception} from './reception';


@Injectable({ providedIn: 'root' })
export class ReceptionService {

  private receptionUrl = 'http://localhost:8080/api/receptionOfOrder/current';

  constructor(
    private http: HttpClient
  ) { }

  getCurrentReception (): Observable<Reception[]> {
    return this.http.get<Reception[]>(this.receptionUrl)
      .pipe(
        catchError(this.handleError('getCurrentReception', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
