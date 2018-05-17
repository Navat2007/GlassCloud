import { Component, OnInit } from '@angular/core';
import {GlassServiceService} from '../services/glass-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-delete-request',
  templateUrl: './delete-request.component.html',
  styleUrls: ['./delete-request.component.css']
})
export class DeleteRequestComponent implements OnInit {

  id: number;
  service?: GlassServiceService<any>;
  isGoBack = false;

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  delete() {
    if (this.service !== null && this.service !== undefined) {
      this.service.deleteItem(this.id).subscribe(res => {
        if (res && this.isGoBack) {
          this.goBack();
        }
      });
    }
    // this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
