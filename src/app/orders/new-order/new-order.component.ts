import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ClientService} from '../../services/client.service';
import {Order} from '../../order';
import {OrderService} from '../../services/order.service';
import {Client} from '../../client';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  newOrder?: Order;
  client?: any;

  constructor(
    public activeModal: NgbActiveModal,
    public clientService: ClientService,
    private service: OrderService,
  ) {

  }

  ngOnInit() {
    this.clientService.update();
    this.add();
  }

  onChange(event) {
    if (event !== undefined) {
      // this.newOrder.client = event;
      this.newOrder.clientId = event.id;
      this.newOrder.discount = event.discount;
    }
  }

  customSearchFn(term: string, item: Client) {
    term = term.toLocaleLowerCase();
    return item.name.toLocaleLowerCase().indexOf(term) > -1 || item.phone.toLocaleLowerCase().indexOf(term) > -1;
  }

  addOrder() {
    this.service.addItem(this.newOrder)
      .subscribe(() => {
        this.service.update();
        this.activeModal.dismiss('Cross click');
      });
  }

  add(): void {
    this.client = null;
    this.newOrder = new Order();
  }
}
