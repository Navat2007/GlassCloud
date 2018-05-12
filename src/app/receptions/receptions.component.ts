import {Component, OnInit} from '@angular/core';
import {Reception} from '../reception';
import {receptions} from '../mock-dtos';

@Component({
  selector: 'app-receptions',
  templateUrl: './receptions.component.html',
  styleUrls: ['./receptions.component.css']
})
export class ReceptionsComponent implements OnInit {

  receptions: Reception[];

  constructor() { }

  ngOnInit() {
    this.receptions = receptions;
  }

  delete(reception: Reception): void {
    console.log('edit reception');
  }
  edit(reception: Reception): void {
    console.log('edit reception');
  }

}
