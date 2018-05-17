import {Component, OnInit} from '@angular/core';
import {ProcessType} from '../process';
import {GlassServiceService} from '../services/glass-service.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-process-type',
  templateUrl: './process-type.component.html',
  styleUrls: ['./process-type.component.css']
})
export class ProcessTypeComponent implements OnInit {

  private serviceUrl = environment.serverHost + '/api/process/type';

  processTypes: ProcessType[];
  isEdit = false;

  constructor(
    private service: GlassServiceService<ProcessType>
  ) {
    this.service.setUrl(this.serviceUrl).setName('process-type');
  }

  ngOnInit() {
    this.getProcessTypes();
  }

  getProcessTypes(): void {
    this.service.getItems()
      .subscribe(items => this.processTypes = items);
  }

  edit() {
    this.isEdit = true;
  }

  save(item: ProcessType) {
    this.service.updateItem(item, item.id).subscribe(res => {
      if (res) {
        this.isEdit = false;
      }
    });
  }

  cancel() {
    this.isEdit = false;
    this.getProcessTypes();
  }
}
