import {Component, Input, OnInit} from '@angular/core';
import {OrderItem} from '../../order';
import {OrderItemService} from '../../services/order-item.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {MaterialService} from '../../services/material.service';
import {Material} from '../../material';
import {ProcessService} from '../../services/process.service';
import {Process} from '../../process';
import {forEach} from '@angular/router/src/utils/collection';
import {OrderService} from '../../services/order.service';

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

  isEmptyProcessList = false;
  idSelectedProcess?: string;

  constructor(
    public service: OrderItemService,
    public materialService: MaterialService,
    public processService: ProcessService,
    private location: Location,
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) {
  }

  ngOnInit() {
    this.getItem();
    this.materialService.update();
    this.processService.update();
    this.update();
  }

  init() {
    this.idSelectedMaterial = null;
    this.depth = null;
  }

  update() {
    this.materialsByDepth = this.getMaterialsByDepth();
  }

  updateProcess() {
    this.idSelectedProcess = null;
    this.processByMaterial = this.getProcessByMaterial();
  }

  getProcessByMaterial(): Process[] {
    let list: Process[] = [];
    if (this.processService.processes) {
      list = this.processService.processes
        .filter(process => {
          if (process.material === undefined) {
            return false;
          }

          if (this.orderItem.process === undefined) {
            return true;
          }

          for (let j = 0; j < this.orderItem.process.length; j++) {
            if (this.orderItem.process[j].id === process.id) {
              return false;
            }
          }

          for (let j = 0; j < process.material.length; j++) {
            if (process.material[j].id === this.orderItem.material.id) {
              return true;
            }
          }

          return false;
        });
    }
    this.isEmptyProcessList = list.length === 0;
    return list;
  }

  getMaterialsByDepth(): Material[] {
    let list: Material[] = [];
    if (this.materialService.materials) {
      list = this.materialService.materials
        .filter(i => i.depth === +this.depth)
        .filter(item => {
          if (this.orderItem.material === undefined) {
            return true;
          }
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
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getItem(id)
      .subscribe(json => {
        this.orderItem = json.data;
        this.depth = this.orderItem.material.depth;
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

  cancelAddItem() {
    this.isEmptyMaterialsList = false;
    this.idSelectedMaterial = null;

    this.isEmptyProcessList = false;
    this.idSelectedProcess = null;
  }

  onChangeProcess(id: string) {
    if (id === '-1') {
      return;
    }
    this.idSelectedProcess = id;
  }

  addProcess() {
    if (this.idSelectedProcess === null) {
      return;
    }

    this.processService.getItem(this.idSelectedProcess)
      .subscribe(json => {
        if (this.orderItem.process === undefined) {
          this.orderItem.process = [];
        }
        this.orderItem.process.push(json.data);
      });
  }

  deleteProcess(id: string) {
    this.orderItem.process = this.orderItem.process
      .filter(i => i.id !== id);
  }
}
