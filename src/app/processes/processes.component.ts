import {Component, OnInit} from '@angular/core';
import {Process, ProcessType} from '../process';
import {GlassServiceService} from '../services/glass-service.service';
import {environment} from '../../environments/environment';
import {ProcessService} from '../services/process.service';
import {ProcessTypeService} from '../services/process-type.service';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent implements OnInit {

  newItem?: Process;
  typeId?: number;
  isValid = false;

  constructor(
    public service: ProcessService,
    public processTypeService: ProcessTypeService,
  ) {
  }

  ngOnInit() {
    this.service.update();
    this.processTypeService.update();
  }

  onChangeProcessType(id: number) {
    this.typeId = +id;
    // this.materialColors.filter(color => color.id === colorId)
  }

  saveNew() {
    this.newItem.type = new ProcessType();
    this.newItem.type.id = this.typeId;
    this.service.addItem(this.newItem).subscribe(res => {
      if (res) {
        this.service.update();
        this.processTypeService.update();
      }
    });
  }

  add(): void {
    this.newItem = new Process();
  }

  cancel() {
    this.service.update();
  }
}
