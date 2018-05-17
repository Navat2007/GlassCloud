import {Component, OnInit} from '@angular/core';
import {MaterialColor} from '../material';
import {environment} from '../../environments/environment';
import {GlassServiceService} from '../services/glass-service.service';

@Component({
  selector: 'app-material-colors',
  templateUrl: './material-colors.component.html',
  styleUrls: ['./material-colors.component.css']
})
export class MaterialColorsComponent implements OnInit {

  materialColors: MaterialColor[];
  isEdit = false;
  newItem?: MaterialColor;

  private serviceUrl = environment.serverHost + '/api/material/color';

  constructor(
    public service: GlassServiceService<MaterialColor>
  ) {
    this.service.setUrl(this.serviceUrl).setName('material-color');
  }

  ngOnInit() {
    this.getMaterialColors();
  }

  getMaterialColors(): void {
    this.service.getItems()
      .subscribe(items => this.materialColors = items);
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
        this.getMaterialColors();
      }
    });
  }

  cancel() {
    this.isEdit = false;
    this.getMaterialColors();
  }

  add(): void {
    this.newItem = new MaterialColor();
  }
}
