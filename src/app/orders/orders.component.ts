import {Component, OnInit} from '@angular/core';
import {Order} from '../order';
import {OrderService} from '../services/order.service';
import {ClientService} from '../services/client.service';
import {NewOrderComponent} from './new-order/new-order.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  // client?: any;

  constructor(
    public service: OrderService,
    public clientService: ClientService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    this.getOrders();
    this.clientService.update();
  }

  getOrders(): void {
    this.service.update();
  }

  delete(order: Order): void {
    this.service.deleteItem(order.id).subscribe();
  }

  print(order: Order): void {
    console.log('print order');
  }

  add(): void {
    this.modalService.open(NewOrderComponent, { centered: true, size: 'lg' });
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }
}
