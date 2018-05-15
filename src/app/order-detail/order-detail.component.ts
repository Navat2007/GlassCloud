import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Order} from '../order';
import {environment} from '../../environments/environment';
import {GlassServiceService} from '../services/glass-service.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order;

  private serviceUrl = environment.serverHost + '/api/order';

  constructor(
    private route: ActivatedRoute,
    private service: GlassServiceService<Order>,
    private location: Location
  ) {
    this.service.setUrl(this.serviceUrl).setName('order-item');
  }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getItem(id)
      .subscribe(order => this.order = order);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.updateItem(this.order)
      .subscribe(() => this.goBack());
  }

}
