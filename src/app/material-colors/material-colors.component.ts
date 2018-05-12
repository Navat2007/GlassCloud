import {Component, OnInit} from '@angular/core';
import {MaterialColor} from '../material';
import {materialColors} from '../mock-dtos';

@Component({
  selector: 'app-material-colors',
  templateUrl: './material-colors.component.html',
  styleUrls: ['./material-colors.component.css']
})
export class MaterialColorsComponent implements OnInit {

  materialColors: MaterialColor[];

  constructor() {
  }

  ngOnInit() {
    this.materialColors = materialColors;
  }

}
