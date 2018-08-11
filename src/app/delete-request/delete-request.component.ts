import {Component, OnInit} from '@angular/core';
import {GlassServiceService} from '../services/glass-service.service';
import {Location} from '@angular/common';
import {MaterialColorService} from '../services/material-color.service';
import {MaterialTypeService} from '../services/material-type.service';
import {ProcessTypeService} from '../services/process-type.service';
import {MaterialService} from '../services/material.service';
import {OrderService} from '../services/order.service';
import {ProcessService} from '../services/process.service';
import {OrderItemService} from '../services/order-item.service';

@Component({
  selector: 'app-delete-request',
  templateUrl: './delete-request.component.html',
  styleUrls: ['./delete-request.component.css']
})
export class DeleteRequestComponent implements OnInit {

  id: string;
  service?: GlassServiceService<any, any> | MaterialColorService | MaterialTypeService | MaterialService
    | ProcessService | ProcessTypeService | OrderService | OrderItemService;
  // | ReceptionService | OrderService  | GlassServiceService<any, any>;
  isGoBack = false;

  constructor(
    private location: Location,
  ) {
  }

  ngOnInit() {
  }

  delete() {
    if (this.service !== null && this.service !== undefined) {
      this.service.deleteItem(this.id).subscribe(res => {
        if (res) {
          this.service.update();
          if (this.isGoBack) {
            this.goBack();
          }
        }
      });
    }
    // this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
