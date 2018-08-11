import {Component, OnInit} from '@angular/core';
import {MaterialColor} from '../material';
import {MaterialColorService} from '../services/material-color.service';

@Component({
  selector: 'app-material-colors',
  templateUrl: './material-colors.component.html',
  styleUrls: ['./material-colors.component.css']
})
export class MaterialColorsComponent implements OnInit {

  isEdit = false;
  newItem?: MaterialColor;

  constructor(
    public service: MaterialColorService
  ) {  }

  ngOnInit() {
    this.service.update();
  }

  edit() {
    this.isEdit = true;
  }

  save(item: MaterialColor) {
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
    this.newItem = new MaterialColor();
  }

  cancel() {
    this.isEdit = false;
    this.service.update();
  }

}
