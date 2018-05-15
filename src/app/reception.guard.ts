import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ReceptionService} from './services/reception.service';

@Injectable()
export class ReceptionGuard implements CanActivate {

  constructor(private rs: ReceptionService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.rs.getCurrentReception().map(res => !!res);
  }
}
