import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/login';
  private logoutUrl = 'http://localhost:8080/logout';
  private isAuth = false;

  constructor(private http: HttpClient) {
  }

  login(credentials): Observable<boolean> {
    console.log('auth ...' + credentials.name);
    const data: string = JSON.stringify(credentials);
    const url = this.loginUrl + '?username=' + credentials.name + '&password=' + credentials.password;
    // const params: URLSearchParams = new URLSearchParams();
    // httpOptions.params.set('action', 'login');
    // const options: RequestOptions = new RequestOptions({params: params});
    return this.http.post(url, data, httpOptions)
      .map((r: Response) => {
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
}
