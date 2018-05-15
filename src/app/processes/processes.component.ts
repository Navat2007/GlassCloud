import {Component, OnInit} from '@angular/core';
import {Process} from '../process';
import {GlassServiceService} from '../services/glass-service.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent implements OnInit {

  private serviceUrl = environment.serverHost + '/api/process';

  processes: Process[];

  constructor(
    private service: GlassServiceService<Process>
  ) {
    this.service.setUrl(this.serviceUrl).setName('process-type');
  }

  ngOnInit() {
    this.getProcesses();
  }

  getProcesses(): void {
    this.service.getItems()
      .subscribe(items => this.processes = items);
  }

}
