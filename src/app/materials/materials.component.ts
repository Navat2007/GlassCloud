import { Component, OnInit } from '@angular/core';
import {Material} from '../material';
import {materials} from '../mock-dtos';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: Material[];

  constructor() { }

  ngOnInit() {
    this.materials = materials;
  }

}
