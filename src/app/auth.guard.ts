import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './services/auth.service';
import {ReceptionService} from './services/reception.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private as: AuthService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.as.isAuth();
  }
}
