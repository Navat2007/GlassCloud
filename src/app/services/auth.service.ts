import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
//   withCredentials: true
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private loginUrl = 'http://localhost:8080/login';
  private logoutUrl = 'http://localhost:8080/logout';
  isAuth = false;

  COOKIE_CONSENT = 'XSRF-TOKEN';
  COOKIE_AUTH = 'Authorization';
  private COOKIE_CONSENT_EXPIRE_DAYS = 3600;

  constructor(private http: HttpClient) {
    this.isAuth = !!this.getCookie(this.COOKIE_AUTH);
  }

  ngOnInit() {

  }

  login(credentials): Observable<boolean> {
    const url =
      this.loginUrl + '?username=' + credentials.name + '&password=' + credentials.password + '&remember-me=' + credentials.rememberMe;

    return this.http.post(url, '')
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
      return this.isAuth;
    } else if (isConsent) {
      this.setCookie(this.COOKIE_CONSENT, '1', this.COOKIE_CONSENT_EXPIRE_DAYS);
      this.isAuth = true;
      e.preventDefault();
    }
  }
}
