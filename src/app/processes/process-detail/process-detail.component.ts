import {Component, Input, OnInit} from '@angular/core';
import {Process} from '../../process';
import {ProcessService} from '../../services/process.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProcessTypeService} from '../../services/process-type.service';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.css']
})
export class ProcessDetailComponent implements OnInit {

  @Input() processItem: Process;
  disabled = true;

  private typeId: number;

  constructor(
    public service: ProcessService,
    public processTypeService: ProcessTypeService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getItem();
    this.processTypeService.update();
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
    this.typeId = typeId;
    // this.materialColors.filter(color => color.id === colorId)
  }
}
