import {Component, OnInit} from '@angular/core';
import {Order} from '../order';
import {GlassServiceService} from '../services/glass-service.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  private serviceUrl = environment.serverHost + '/api/order';

  constructor(
    private service: GlassServiceService<Order>
  ) {
    this.service.setUrl(this.serviceUrl).setName('order');
  }

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
