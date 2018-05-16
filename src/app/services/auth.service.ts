import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {LoggingService} from './logging.service';
import {environment} from '../../environments/environment';
import {ReceptionService} from './reception.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = environment.serverHost + '/login';
  private logoutUrl = environment.serverHost + '/logout';
  private serviceUrl = environment.serverHost + '/api/is_auth';
  public _isAuth = false;

  XSRF_TOKEN = 'XSRF-TOKEN';
  X_XSRF_TOKEN = 'X-XSRF-TOKEN';
  COOKIE_AUTH = 'Authorization';
  private COOKIE_CONSENT_EXPIRE_DAYS = 3600;

  constructor(
    private http: HttpClient,
    private logging: LoggingService,
    private receptionService: ReceptionService,
  ) {
    console.log('construct auth service');
  }

  isAuth(): Observable<any> {
    return this.http.get(this.serviceUrl)
      .pipe(
        tap(orders => this.logging.log(`fetched ${name}` + orders)),
        catchError(this.logging.handleError('get ${name}'))
      )
      .map(res => this._isAuth = !!res);
  }

  login(credentials): Observable<boolean> {
    const url =
      this.loginUrl + '?username=' + credentials.name + '&password=' + credentials.password + '&remember-me=' + credentials.rememberMe;

    return this.http.post(url, '')
      .map((r: Response) => {
        this._isAuth = true;
        return this._isAuth;
      });
  }

  logout(): Observable<boolean> {
    return this.http.get(this.logoutUrl)
      .map((r: Response) => {
        console.log('logout');
        this._isAuth = false;
        this.receptionService.receptionSelected = false;
        return this._isAuth;
      });
  }

  getCookie(name: string) {
    const ca: Array<string> = document.cookie.split(';');
    const caLen: number = ca.length;
    const cookieName = `${name}=`;
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  private deleteCookie(name) {
    this.setCookie(name, '', -1);
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = '') {
    const d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    const cpath: string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  private consent(isConsent: boolean, e: any) {
    if (!isConsent) {
      return this._isAuth;
    } else if (isConsent) {
      this.setCookie(this.XSRF_TOKEN, '1', this.COOKIE_CONSENT_EXPIRE_DAYS);
      this._isAuth = true;
      e.preventDefault();
    }
  }
}
