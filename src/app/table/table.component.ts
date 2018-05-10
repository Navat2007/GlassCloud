import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  orders: Order[];
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }
}
