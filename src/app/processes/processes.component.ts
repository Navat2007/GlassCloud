import {Component, OnInit} from '@angular/core';
import {Process} from '../process';
import {ProcessService} from '../services/process.service';
import {ProcessTypeService} from '../services/process-type.service';
import {MaterialService} from '../services/material.service';
import {Material} from '../material';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent implements OnInit {

  newItem?: Process;
  typeId?: string;
  selectedMaterials: Set<Material> = new Set();

  constructor(
    public service: ProcessService,
    public materialService: MaterialService,
    public processTypeService: ProcessTypeService,
  ) {
  }

  ngOnInit() {
    this.service.update();
    this.materialService.update();
    this.processTypeService.update();
  }

  onChangeProcessType(id: string) {
    this.typeId = id;
  }

  onChangeMaterial(id: string) {
    const material = this.materialService.getById(id);
    this.selectedMaterials.add(material);
  }

  saveNew() {
    this.newItem.type = this.processTypeService.getById(this.typeId);
    this.newItem.material = Array.from(this.selectedMaterials);
    this.service.addItem(this.newItem).subscribe(res => {
      if (res) {
        this.service.update();
        this.processTypeService.update();
      }
    });
  }

  add(): void {
    this.newItem = new Process();
  }

  cancel() {
    this.service.update();
  }

  getMaterials(depth: number): Material[] {
    return this.materialService.getMaterialsByDepth(depth).filter(m => !this.selectedMaterials.has(m));
  }

  removeMaterial(id: string) {
    const material = this.materialService.getById(id);
    this.selectedMaterials.delete(material);
  }
}
