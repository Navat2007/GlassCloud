import {Component, OnInit} from '@angular/core';
import {ClientService} from '../services/client.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NewClientComponent} from './new-client/new-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(
    public service: ClientService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
    this.service.update();
    this.service.updateTypes();
  }

  add(): void {
    this.modalService.open(NewClientComponent, { centered: true, size: 'lg' });
  }
}
