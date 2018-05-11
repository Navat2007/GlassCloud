import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

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

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.orderService.addOrder({ order } as Order)
  //     .subscribe(order => {
  //       this.orders.push(order);
  //     });
  // }

  delete(order: Order): void {
    this.orders = this.orders.filter(h => h !== order);
    this.orderService.deleteOrder(order).subscribe();
  }

}
