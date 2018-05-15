import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Reception} from '../reception';
import {LoggingService} from './logging.service';


@Injectable({providedIn: 'root'})
export class ReceptionService implements OnInit {

  private receptionUrl = 'http://localhost:8080/api/receptionOfOrder';

  constructor(
    private http: HttpClient,
    private logger: LoggingService,
  ) {
  }

  ngOnInit() {
  }

  getCurrentReception(): Observable<any> {
    return this.http.get<any>(this.receptionUrl + '/current')
      .pipe(
        catchError(this.logger.handleError('getCurrentReception', []))
      );
  }

  getReceptions(): Observable<Reception[]> {
    return this.http.get<Reception[]>(this.receptionUrl)
      .pipe(
        catchError(this.logger.handleError('getReceptions', []))
      );
  }

  selectReception(id: number): Observable<boolean[]> {
    return this.http.post<boolean[]>(this.receptionUrl + '/select/' + id, '')
      .pipe(
        catchError(this.logger.handleError(' select Reception', []))
      );
  }
}
