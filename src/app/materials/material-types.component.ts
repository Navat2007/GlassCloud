import {Component, OnInit} from '@angular/core';
import {MaterialType} from '../material';
import {GlassServiceService} from '../services/glass-service.service';
import {environment} from '../../environments/environment';
import {MaterialTypeService} from '../services/material-type.service';

@Component({
  selector: 'app-material-types',
  templateUrl: './material-types.component.html',
  styleUrls: ['./material-types.component.css']
})
export class MaterialTypesComponent implements OnInit {

  materialTypes: MaterialType[];
  isEdit = false;
  newItem?: MaterialType;

  constructor(
    public service: MaterialTypeService
  ) {  }

  ngOnInit() {
    this.getMaterialTypes();
  }

  getMaterialTypes(): void {
    this.service.getItems()
      .subscribe(items => this.materialTypes = items);
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
        this.getMaterialTypes();
      }
    });
  }

  add(): void {
    this.newItem = new MaterialType();
  }

  cancel() {
    this.isEdit = false;
    this.getMaterialTypes();
  }
}
