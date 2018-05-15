import {Component, OnInit} from '@angular/core';
import {Material} from '../material';
import {GlassServiceService} from '../services/glass-service.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: Material[];

  private serviceUrl = environment.serverHost + '/api/material';

  constructor(
    private service: GlassServiceService<Material>
  ) {
    this.service.setUrl(this.serviceUrl).setName('material');
  }

  ngOnInit() {
    this.getProcessTypes();
  }

  getProcessTypes(): void {
    this.service.getItems()
      .subscribe(items => this.materials = items);
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
  //   this.materials = this.materials.filter(h => h !== material);
  //   this.materialService.deleteMaterial(material).subscribe();
  // }
}
