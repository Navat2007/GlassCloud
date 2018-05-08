import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  names = [];
  constructor() { }

  ngOnInit() {
    this.names.push({name: 'Ivan'});
    this.names.push({name: 'Petr'});
    this.names.push({name: 'Petr'});
  }

}
