import {Component, OnInit} from '@angular/core';
import {ProcessType} from '../process';
import {ProcessTypeService} from '../services/process-type.service';

@Component({
  selector: 'app-process-type',
  templateUrl: './process-type.component.html',
  styleUrls: ['./process-type.component.css']
})
export class ProcessTypeComponent implements OnInit {

  isEdit = false;
  newItem?: ProcessType;

  constructor(
    public service: ProcessTypeService
  ) { }

  ngOnInit() {
    this.service.update();
  }

  edit() {
    this.isEdit = true;
  }

  save(item: ProcessType) {
    this.service.updateItem(item, item.id).subscribe(res => {
      if (res) {
        this.isEdit = false;
      }
    });
  }

  saveNew() {
    this.service.addItem(this.newItem).subscribe(res => {
      if (res) {
        this.service.update();
      }
    });
  }

  add(): void {
    this.newItem = new ProcessType();
  }

  cancel() {
    this.isEdit = false;
    this.service.update();
  }
}
