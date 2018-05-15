import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessType} from '../process';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessTypeService {

  private serviceUrl = environment.serverHost + '/api/process/type';

  constructor(
    private http: HttpClient,
  ) { }

  getProcessTypes(): Observable<ProcessType[]> {
    return this.http.get<ProcessType[]>(this.serviceUrl);
  }
}
