import {Component, OnInit} from '@angular/core';
import {Material} from '../material';
import {MaterialService} from '../services/material.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: Material[];

  constructor(
    private materialService: MaterialService
  ) {
  }

  ngOnInit() {
    this.getMaterials();
  }

  getMaterials(): void {
    this.materialService.getMaterials()
      .subscribe(materials => this.materials = materials);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.orderService.addOrder({ order } as Order)
  //     .subscribe(order => {
  //       this.orders.push(order);
  //     });
  // }

  delete(material: Material): void {
    this.materials = this.materials.filter(h => h !== material);
    this.materialService.deleteMaterial(material).subscribe();
  }
}
