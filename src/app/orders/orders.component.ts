import {Component, OnInit} from '@angular/core';
import {Order} from '../order';
import {OrderService} from '../services/order.service';
import {ClientService} from '../services/client.service';
import {Observable, Observer} from 'rxjs';
import {Client} from '../client';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  phoneNumber?: number;
  orders: Order[];
  newOrder?: Order;
  clientId: number;

  private value: any = ['Athens'];
  private _disabledV = '0';
  private disabled = false;

  constructor(
    private service: OrderService,
    public clientService: ClientService,
  ) {
  }

  ngOnInit() {
    this.getOrders();
    this.clientService.update();
  }

  getOrders(): void {
    this.service.getItems()
      .subscribe(orders => this.orders = orders);
  }

  customSearchFn(term: string, item: Client) {
    term = term.toLocaleLowerCase();
    // return item.name.toLocaleLowerCase().indexOf(term) > -1 || item.phone.toLocaleLowerCase() === term;
    return item.name.toLocaleLowerCase().indexOf(term) > -1 || item.phone.toLocaleLowerCase().indexOf(term) > -1;
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

  add(): void {
    this.newOrder = new Order();
  }

  updatePhoneNumber() {

  }

  public refreshValue(value: any): void {
    console.log('refresh ', value);
    this.value = value;
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }
}
