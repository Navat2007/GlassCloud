import {Component, Input, OnInit} from '@angular/core';
import {OrderItem} from '../../order';
import {OrderItemService} from '../../services/order-item.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {MaterialService} from '../../services/material.service';
import {Material} from '../../material';
import {ProcessService} from '../../services/process.service';
import {Process} from '../../process';

@Component({
  selector: 'app-order-item-detail',
  templateUrl: './order-item-detail.component.html',
  styleUrls: ['./order-item-detail.component.css']
})
export class OrderItemDetailComponent implements OnInit {

  @Input() orderItem: OrderItem;
  disabled = true;

  materialsByDepth: Material[] = [];
  processByMaterial: Process[] = [];
  depth?: number;
  isEmptyMaterialsList = false;
  idSelectedMaterial?: number;

  constructor(
    public service: OrderItemService,
    public materialService: MaterialService,
    public processService: ProcessService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getItem();
    this.materialService.update();
    this.processService.update();
    this.depth = this.orderItem.material.depth;
    // this.idSelectedMaterial = this.orderItem.process
    this.update();
  }

  init() {
    this.idSelectedMaterial = null;
    this.depth = null;
  }

  update() {
    this.materialsByDepth = this.getMaterialsByDepth();
    this.processByMaterial = this.getProcessByMaterial();
  }

  getProcessByMaterial(): Process[] {
    let list: Process[] = [];
    if (this.processService.processes) {
      list = this.processService.processes

    }

    return list;
  }

  getMaterialsByDepth(): Material[] {
    let list: Material[] = [];
    if (this.materialService.materials) {
      list = this.materialService.materials
        .filter(i => i.depth === +this.depth)
        .filter(item => {
          for (let j = 0; j < this.orderItem.material.length; j++) {
            if (this.orderItem.material[j].id === item.id) {
              return false;
            }
          }
          return true;
        });
    }
    this.isEmptyMaterialsList = list.length === 0;
    return list;
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getItem(id)
      .subscribe(item => {
        this.orderItem = item;
        // this.typeId = this.orderItem.type.id;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.updateItem(this.orderItem, this.orderItem.id)
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
    this.getItem();
  }
}
