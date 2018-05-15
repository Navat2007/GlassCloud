import {Component, OnInit} from '@angular/core';
import {MaterialType} from '../material';
import {MaterialTypeService} from '../services/material-type.service';

@Component({
  selector: 'app-material-types',
  templateUrl: './material-types.component.html',
  styleUrls: ['./material-types.component.css']
})
export class MaterialTypesComponent implements OnInit {

  materialTypes: MaterialType[];

  constructor(
    private service: MaterialTypeService
  ) { }

  ngOnInit() {
    this.getMaterials();
  }

  getMaterials(): void {
    this.service.getMaterialTypes()
      .subscribe(items => this.materialTypes = items);
  }

}
