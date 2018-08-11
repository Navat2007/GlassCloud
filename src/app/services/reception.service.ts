import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Reception} from '../reception';
import {LoggingService} from './logging.service';
import {environment} from '../../environments/environment';
import {JsonItemResponse} from './jsonItem';


@Injectable({providedIn: 'root'})
export class ReceptionService {

  private receptionUrl = environment.serverHost + '/api/receptionOfOrder';
  receptionSelected = false;
  currentReception?: Reception | any;

  constructor(
    private http: HttpClient,
    private logger: LoggingService,
  ) {
  }

  getCurrentReception(): Observable<any> {
    return this.http.get<any>(this.receptionUrl + '/current')
      .pipe(
        catchError(this.logger.handleError('getCurrentReception', []))
      )
      .map(res => this.currentReception = res)
      .map(res => this.receptionSelected = !!res);
  }

  getReceptions(): Observable<JsonItemResponse<Reception[]>> {
    return this.http.get<any>(this.receptionUrl)
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
