import {Component, OnInit} from '@angular/core';
import {Order} from '../order';
import {GlassServiceService} from '../services/glass-service.service';
import {environment} from '../../environments/environment';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(
    private service: OrderService
  ) {  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.service.getItems()
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
    this.service.deleteItem(order.id).subscribe();
  }

  print(order: Order): void {
    console.log('print order');
  }

  edit(order: Order): void {
    console.log('edit order');
  }
}
