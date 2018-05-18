import {Component, Input, OnInit} from '@angular/core';
import {Process} from '../../process';
import {ProcessService} from '../../services/process.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProcessTypeService} from '../../services/process-type.service';
import {MaterialService} from '../../services/material.service';
import {Material} from '../../material';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.css']
})
export class ProcessDetailComponent implements OnInit {

  @Input() processItem: Process;
  disabled = true;
  isEmptyMaterialsList = false;
  idSelectedMaterial?: number;
  materialsByDepth: Material[] = [];

  private typeId: number;
  private materialForAdd?: Material;

  constructor(
    public service: ProcessService,
    public processTypeService: ProcessTypeService,
    public materialService: MaterialService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getItem();
    this.processTypeService.update();
    this.materialService.update();
  }

  update() {
    this.materialsByDepth = this.getMaterialsByDepth();
  }

  getMaterialsByDepth(): Material[] {
    let list: Material[] = [];
    if (this.materialService.materials) {
      list = this.materialService.materials
        .filter(i => i.depth === this.processItem.depth)
        .filter(item => {
          for (let j = 0; j < this.processItem.material.length; j++) {
            if (this.processItem.material[j].id === item.id) {
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
        this.processItem = item;
        this.typeId = this.processItem.type.id;
      });
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.disabled = false;
  }

  save(): void {
    this.processItem.type.id = this.typeId;
    this.service.updateItem(this.processItem, this.processItem.id)
      .subscribe(res => this.processItem = res);
    this.disabled = true;
  }

  cancel() {
    this.disabled = true;
    this.getItem();
  }

  onChangeType(typeId: number) {
    this.typeId = +typeId;
    // this.materialColors.filter(color => color.id === colorId)
  }

  onChangeMaterial(id: number) {
    id = +id;
    if (id === -1) {
      return;
    }
    this.idSelectedMaterial = +id;
    this.materialService.getItem(id)
      .subscribe(res => this.materialForAdd = res);
  }

  deleteMaterial(id: number) {
    // this.materialService.getItem(id)
    //   .subscribe(item => this.processItem.material.delete(item));
    this.processItem.material = this.processItem.material.filter(item => item.id !== id);
  }

  addMaterial() {
    if (this.idSelectedMaterial) {
      const materials = this.processItem.material.filter(item => item.id === this.idSelectedMaterial);
      if (materials.length === 0) {
        this.processItem.material.push(this.materialForAdd);
      }
    }
    this.idSelectedMaterial = undefined;
  }
}
