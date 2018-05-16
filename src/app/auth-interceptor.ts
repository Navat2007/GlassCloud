import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {AuthService} from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private as: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      headers: request.headers
        .set('Content-Type', 'application/json')
        .set(this.as.X_XSRF_TOKEN, this.as.getCookie(this.as.XSRF_TOKEN))
        .set(this.as.COOKIE_AUTH, this.as.getCookie(this.as.COOKIE_AUTH)),
      withCredentials: true
    });
    console.log(request.headers);
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        // if (err.status === 401) {
        //   document.location.href = '/login';
        // }
      }
    });
  }
}
