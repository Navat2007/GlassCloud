import {Component, OnInit} from '@angular/core';
import {Material, MaterialType} from '../material';
import {GlassServiceService} from '../services/glass-service.service';
import {environment} from '../../environments/environment';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: Material[];
  materialsOriginal: Material[];
  newItem?: Material;

  private serviceUrl = environment.serverHost + '/api/material';

  constructor(
    private service: GlassServiceService<Material>,
  ) {
    this.service.setUrl(this.serviceUrl).setName('material');
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

  ngOnInit() {
    this.getMaterials();
  }

  getMaterials(): void {
    this.service.getItems()
      .subscribe(items => {
        this.materials = items;
        this.materialsOriginal = items;
        // this.getTypes();
      });
  }

  onChangeType(type: string) {
    if (type === '-1') {
      this.materials = this.materialsOriginal;
    } else {
      this.materials = this.materialsOriginal.filter(i => i.type.name === type);
    }
  }

  onChangeDepht(depth: string) {
    if (depth === '-1') {
      this.materials = this.materialsOriginal;
    } else {
      this.materials = this.materialsOriginal.filter(i => i.depth === +depth);
    }
  }

  saveNew() {
    this.service.addItem(this.newItem).subscribe(res => {
      if (res) {
        this.getMaterials();
      }
    });
  }

  add(): void {
    this.newItem = new Material();
  }
}
