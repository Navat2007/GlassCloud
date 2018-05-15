import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private serviceUrl = environment.serverHost + '/api/company';

  constructor() { }
}
