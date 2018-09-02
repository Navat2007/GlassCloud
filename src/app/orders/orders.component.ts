import {Component, OnInit} from '@angular/core';
import {Order} from '../order';
import {OrderService} from '../services/order.service';
import {ClientService} from '../services/client.service';
import {Client} from '../client';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  newOrder?: Order;
  client?: any;

  constructor(
    private service: OrderService,
    public clientService: ClientService,
  ) {
  }

  ngOnInit() {
    this.getOrders();
    this.clientService.update();
  }

  getOrdersWithoutDeleted(): Order[] {
    return this.orders.filter(order => !order.deleted);
  }

  getOrders(): void {
    this.service.getItems()
      .subscribe(json => this.orders = json.data);
  }

  customSearchFn(term: string, item: Client) {
    term = term.toLocaleLowerCase();
    // return item.name.toLocaleLowerCase().indexOf(term) > -1 || item.phone.toLocaleLowerCase() === term;
    return item.name.toLocaleLowerCase().indexOf(term) > -1 || item.phone.toLocaleLowerCase().indexOf(term) > -1;
  }

  onChange(event) {
    if (event !== undefined) {
      // this.newOrder.client = event;
      this.newOrder.clientId = event.id;
      this.newOrder.discount = event.discount;
    }
  }

  addOrder() {
    this.service.addItem(this.newOrder)
      .subscribe(res => this.getOrders());
  }

  delete(order: Order): void {
    this.orders = this.orders.filter(h => h !== order);
    this.service.deleteItem(order.id).subscribe();
  }

  print(order: Order): void {
    console.log('print order');
  }

  add(): void {
    this.client = null;
    this.newOrder = new Order();
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }
}
