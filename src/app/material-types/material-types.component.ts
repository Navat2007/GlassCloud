import {Component, OnInit} from '@angular/core';
import {MaterialColor, MaterialType} from '../material';
import {GlassServiceService} from '../services/glass-service.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-material-types',
  templateUrl: './material-types.component.html',
  styleUrls: ['./material-types.component.css']
})
export class MaterialTypesComponent implements OnInit {

  materialTypes: MaterialType[];

  private serviceUrl = environment.serverHost + '/api/material/type';

  constructor(
    private service: GlassServiceService<MaterialColor>
  ) {
    this.service.setUrl(this.serviceUrl).setName('material-type');
  }

  ngOnInit() {
    this.getProcessTypes();
  }

  getProcessTypes(): void {
    this.service.getItems()
      .subscribe(items => this.materialTypes = items);
  }

}
