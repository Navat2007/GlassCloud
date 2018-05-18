import {Component, Input, OnInit} from '@angular/core';
import {OrderItem} from '../../order';
import {OrderItemService} from '../../services/order-item.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-item-detail',
  templateUrl: './order-item-detail.component.html',
  styleUrls: ['./order-item-detail.component.css']
})
export class OrderItemDetailComponent implements OnInit {

  @Input() orderItem: OrderItem;
  disabled = true;

  constructor(
    public service: OrderItemService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getItem(id)
      .subscribe(item => {
        this.orderItem = item;
        // this.typeId = this.orderItem.type.id;
      });
  }
}
