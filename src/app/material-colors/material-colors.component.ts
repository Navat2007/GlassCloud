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

  private serviceUrl = environment.serverHost + '/api/material/color';

  constructor(
    private service: GlassServiceService<MaterialColor>
  ) {
    this.service.setUrl(this.serviceUrl).setName('material-color');
  }

  ngOnInit() {
    this.getProcessTypes();
  }

  getProcessTypes(): void {
    this.service.getItems()
      .subscribe(items => this.materialColors = items);
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
