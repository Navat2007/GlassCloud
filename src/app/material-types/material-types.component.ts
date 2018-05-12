import {Component, OnInit} from '@angular/core';
import {MaterialType} from '../material';
import {materialTypes} from '../mock-dtos';

@Component({
  selector: 'app-material-types',
  templateUrl: './material-types.component.html',
  styleUrls: ['./material-types.component.css']
})
export class MaterialTypesComponent implements OnInit {

  materialTypes: MaterialType[];

  constructor() { }

  ngOnInit() {
    this.materialTypes = materialTypes;
  }

}
