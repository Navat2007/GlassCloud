import { Component, OnInit } from '@angular/core';
import {Process} from '../process';
import {processes} from '../mock-dtos';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent implements OnInit {

  processes: Process[];

  constructor() { }

  ngOnInit() {
    this.processes = processes;
  }

}
