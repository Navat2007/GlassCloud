import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {AuthService} from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private as: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      headers: request.headers
        .set('Content-Type', 'application/json')
        .set('X-XSRF-TOKEN', this.as.getCookie('XSRF-TOKEN'))
        .set('Authorization', this.as.getCookie('Authorization')),
      withCredentials: true
    });
    console.log(request.headers);
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        // if (err.status === 403) {
        //   document.location.href = '/login';
        // }
      }
    });
  }
}
