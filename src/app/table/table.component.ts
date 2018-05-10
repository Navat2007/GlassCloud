import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  names = [];
  orders = [];
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.names.push({row: '1', name: 'Ivan1', email: 'm@m.ru'});
    this.names.push({row: '2', name: 'Ivan2', email: 'm@m.ru'});
    this.names.push({row: '3', name: 'Ivan3', email: 'm@m.ru'});

    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }
}
