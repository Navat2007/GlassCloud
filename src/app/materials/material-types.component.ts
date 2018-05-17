import {Component, OnInit} from '@angular/core';
import {MaterialType} from '../material';
import {MaterialTypeService} from '../services/material-type.service';

@Component({
  selector: 'app-material-types',
  templateUrl: './material-types.component.html',
  styleUrls: ['./material-types.component.css']
})
export class MaterialTypesComponent implements OnInit {

  isEdit = false;
  newItem?: MaterialType;

  constructor(
    public service: MaterialTypeService
  ) {  }

  ngOnInit() {
    this.service.update();
  }

  edit() {
    this.isEdit = true;
  }

  save(item: MaterialType) {
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
    this.newItem = new MaterialType();
  }

  cancel() {
    this.isEdit = false;
    this.service.update();
  }
}
