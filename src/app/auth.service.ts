import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
//   withCredentials: true
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/login';
  private logoutUrl = 'http://localhost:8080/logout';
  private isAuth = false;

  COOKIE_CONSENT = 'XSRF-TOKEN';
  private COOKIE_CONSENT_EXPIRE_DAYS = 3600;

  private isConsented = false;

  constructor(private http: HttpClient) {
    this.isConsented = this.getCookie(this.COOKIE_CONSENT) === '1';
  }

  login(credentials): Observable<boolean> {
    console.log('auth ...' + credentials.name);
    const data: string = JSON.stringify(credentials);
    const url = this.loginUrl + '?username=' + credentials.name + '&password=' + credentials.password;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-XSRF-TOKEN': this.getCookie(this.COOKIE_CONSENT),
        'Authorization': this.getCookie('Authorization'),
      }),
      withCredentials: true
    };
    console.log();
    // httpOptions.headers.append('X-XSRF-TOKEN', this.getCookie(this.COOKIE_CONSENT));
    // const params: URLSearchParams = new URLSearchParams();
    // httpOptions.params.set('action', 'login');
    // const options: RequestOptions = new RequestOptions({params: params});
    return this.http.post(url, data, httpOptions)
      .map((r: Response) => {
        console.log(r);
        this.isAuth = true;
        return this.isAuth;
      });
  }

  logout(): Observable<boolean> {
    return this.http.get(this.logoutUrl)
      .map((r: Response) => {
        console.log('logout');
        this.isAuth = false;
        return this.isAuth;
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
      return this.isConsented;
    } else if (isConsent) {
      this.setCookie(this.COOKIE_CONSENT, '1', this.COOKIE_CONSENT_EXPIRE_DAYS);
      this.isConsented = true;
      e.preventDefault();
    }
  }

  getAuthorizationToken() {

  }
}
