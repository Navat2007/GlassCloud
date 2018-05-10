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
    this.names.push({row: '1', name: 'Ivan1', email: 'm@m.ru'});
    this.names.push({row: '2', name: 'Ivan2', email: 'm@m.ru'});
    this.names.push({row: '3', name: 'Ivan3', email: 'm@m.ru'});
  }

}
