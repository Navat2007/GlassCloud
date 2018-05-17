import {Component, OnInit} from '@angular/core';
import {Material} from '../material';
import {environment} from '../../environments/environment';
import {MaterialService} from '../services/material.service';
import {MaterialColorService} from '../services/material-color.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materialsOriginal: Material[];
  newItem?: Material;

  constructor(
    public service: MaterialService,
    public colorService: MaterialColorService
  ) {  }

  ngOnInit() {
    this.service.update();
    this.colorService.update();
    this.materialsOriginal = this.service.materials;
  }

  getTypes(): string[] {
    const res = this.materialsOriginal
      .map(i => i.type.name);

    return Array.from(new Set<string>(res).values());
  }

  getDepths(): number[] {
    const res = this.materialsOriginal
      .map(i => i.depth);

    return Array.from(new Set<number>(res).values());
  }

  onChangeType(type: string) {
    if (type === '-1') {
      this.service.materials = this.materialsOriginal;
    } else {
      this.service.materials = this.materialsOriginal.filter(i => i.type.name === type);
    }
  }

  onChangeDepht(depth: string) {
    if (depth === '-1') {
      this.service.materials = this.materialsOriginal;
    } else {
      this.service.materials = this.materialsOriginal.filter(i => i.depth === +depth);
    }
  }

  saveNew() {
    this.service.addItem(this.newItem).subscribe(res => {
      if (res) {
        this.service.update();
      }
    });
  }

  add(): void {
    this.newItem = new Material();
  }
}
