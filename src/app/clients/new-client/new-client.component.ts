import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ClientService} from '../../services/client.service';
import {Client} from '../../client';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  newClient?: Client;
  idSelectedType?: string;

  constructor(
    public activeModal: NgbActiveModal,
    public service: ClientService,
  ) {
  }

  ngOnInit() {
    this.idSelectedType = null;
    this.newClient = new Client();
    this.newClient.discount = 0;
    this.service.update();
    this.service.updateTypes();
  }

  addClient() {
    this.newClient.type = this.service.getById(this.idSelectedType);

    this.service.addItem(this.newClient)
      .subscribe(() => {
        this.service.update();
        this.activeModal.dismiss('Cross click');
      });
  }

  onChangeType(id: string) {
    this.idSelectedType = id;
  }
}
