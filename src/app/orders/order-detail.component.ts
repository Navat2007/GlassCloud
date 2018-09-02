import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Order, OrderItem} from '../order';
import {Material} from '../material';
import {MaterialService} from '../services/material.service';
import {OrderService} from '../services/order.service';
import {OrderItemService} from '../services/order-item.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order;
  orderItems: OrderItem[];
  disabled = true;
  newItem?: OrderItem;
  depth?: number;
  materialsByDepth: Material[] = [];
  isEmptyMaterialsList = false;
  idSelectedMaterial?: number;

  constructor(
    public materialService: MaterialService,
    public orderItemService: OrderItemService,
    private route: ActivatedRoute,
    public service: OrderService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getOrder();
    this.materialService.update();
    this.update();
  }

  getOrder(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getItem(id)
      .subscribe(json => {
        this.order = json.data;
        this.getOrderItems();
      });
  }

  getOrderItems(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderItemService.getItems(id)
      .subscribe(json => {
        this.orderItems = json.data.filter(item => !item.deleted);
        this.order.items = json.data;
      });
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

  onChangeMaterial(id: string) {
    if (id === '-1') {
      return;
    }
    this.idSelectedMaterial = +id;
    this.materialService.getItem(id)
      .subscribe(json => {
        this.newItem.material = json.data;
        this.newItem.materialId = json.data.id;
      });
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
    this.newItem.orderId = this.order.id;
    this.newItem.material = new Material();
    this.newItem.process = [];
    this.newItem.processSum = 0;
    this.newItem.summa = 0;
    this.newItem.perimeter = 0;
  }

  addItem() {
    if (!this.order.items) {
      this.order.items = [];
    }

    this.newItem.number = this.order.items.length + 1;

    this.order.items.push(this.newItem);
    this.orderItems.push(this.newItem);

    this.recalculateOrder();
  }

  private recalculateOrder() {
    this.service.recalculateOrder(this.order)
      .subscribe(json => {
        this.orderItems = json.data.items;
        this.order = json.data;
      });
  }

  save(): void {
    this.recalculateOrder();

    this.service.updateItem(this.order, this.order.id)
      .subscribe(res => {
        if (res) {
          this.init();
          this.disabled = true;
        }
        this.getOrder();
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
