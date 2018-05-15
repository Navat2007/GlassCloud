import {Component, OnInit} from '@angular/core';
import {MaterialColor} from '../material';
import {MaterialColorService} from '../services/material-color.service';

@Component({
  selector: 'app-material-colors',
  templateUrl: './material-colors.component.html',
  styleUrls: ['./material-colors.component.css']
})
export class MaterialColorsComponent implements OnInit {

  materialColors: MaterialColor[];

  constructor(private service: MaterialColorService) {
  }

  ngOnInit() {
    this.getMaterialColors();
  }

  getMaterialColors(): void {
    this.service.getMaterialColors()
      .subscribe(materials => this.materialColors = materials);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.orderService.addOrder({ order } as Order)
  //     .subscribe(order => {
  //       this.orders.push(order);
  //     });
  // }

  // delete(material: Material): void {
  //   this.materialColors = this.service.filter(h => h !== material);
  //   this.service.deleteMaterialColor(material).subscribe();
  // }

}
