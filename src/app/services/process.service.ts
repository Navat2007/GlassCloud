import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Process} from '../process';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  private serviceUrl = environment.serverHost + '/api/process';

  constructor(
    private http: HttpClient,
  ) { }

  getProcesses(): Observable<Process[]> {
    return this.http.get<Process[]>(this.serviceUrl);
  }
}
