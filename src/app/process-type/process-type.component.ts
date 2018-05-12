import { Component, OnInit } from '@angular/core';
import {ProcessType} from '../process';
import {processTypes} from '../mock-dtos';

@Component({
  selector: 'app-process-type',
  templateUrl: './process-type.component.html',
  styleUrls: ['./process-type.component.css']
})
export class ProcessTypeComponent implements OnInit {

  processTypes: ProcessType[];

  constructor() { }

  ngOnInit() {
    this.processTypes = processTypes;
  }

}
