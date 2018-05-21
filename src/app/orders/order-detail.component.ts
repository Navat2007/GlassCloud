import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Order, OrderItem} from '../order';
import {Material} from '../material';
import {MaterialService} from '../services/material.service';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order;
  disabled = true;
  newItem?: OrderItem;
  depth?: number;
  materialsByDepth: Material[] = [];
  isEmptyMaterialsList = false;
  idSelectedMaterial?: number;

  constructor(
    public materialService: MaterialService,
    private route: ActivatedRoute,
    private service: OrderService,
    // private orderItemService: OrderItemService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getOrder();
    this.materialService.update();
    this.update();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getItem(id)
      .subscribe(order => this.order = order);
  }

  update() {
    this.materialsByDepth = this.getMaterialsByDepth();
  }

  getMaterialsByDepth(): Material[] {
    let list: Material[] = [];
    if (this.materialService.materials) {
      list = this.materialService.materials
        .filter(i => i.depth === +this.depth)
        .filter(item => {
          for (let j = 0; j < this.newItem.material.length; j++) {
            if (this.newItem.material[j].id === item.id) {
              return false;
            }
          }
          return true;
        });
    }
    this.isEmptyMaterialsList = list.length === 0;
    return list;
  }

  onChangeMaterial(id: number) {
    id = +id;
    if (id === -1) {
      return;
    }
    this.idSelectedMaterial = +id;
    this.materialService.getItem(id)
      .subscribe(res => this.newItem.material = res);
  }

  goBack(): void {
    this.location.back();
  }

  init() {
    this.idSelectedMaterial = null;
    this.depth = null;
  }

  add() {
    this.init();
    this.newItem = new OrderItem();
    this.newItem.material = new Material();
    this.newItem.process = [];
  }

  addItem() {
    if (!this.order.items) {
      this.order.items = [];
    }

    this.newItem.summa = 110;
    this.newItem.processSum = 110;
    this.newItem.perimeter = 110;
    this.newItem.area = 110;
    this.newItem.number = this.order.items.length + 1;


    this.order.items.push(this.newItem);
  }

  save(): void {
    this.service.updateItem(this.order, this.order.id)
      .subscribe(res => {
        if (res) {
          this.init();
          this.disabled = true;
        }
      });
  }

  edit(): void {
    this.disabled = false;
  }

  cancel() {
    this.disabled = true;
    this.getOrder();
  }

}
