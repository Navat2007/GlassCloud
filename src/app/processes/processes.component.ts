import {Component, OnInit} from '@angular/core';
import {Process} from '../process';
import {GlassServiceService} from '../services/glass-service.service';
import {environment} from '../../environments/environment';
import {ProcessService} from '../services/process.service';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent implements OnInit {

  constructor(
    public service: ProcessService
  ) {
  }

  ngOnInit() {
    this.service.update();
  }


}
