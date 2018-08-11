import {Component, OnInit} from '@angular/core';
import {Client, ClientType} from '../client';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  newClient?: Client;
  idSelectedType?: string;

  constructor(
    public service: ClientService,
  ) {
  }

  ngOnInit() {
    this.service.update();
    this.service.updateTypes();
  }

  add(): void {
    this.idSelectedType = null;
    this.newClient = new Client();
    this.newClient.discount = 0;
  }

  addClient() {
    this.newClient.type = new ClientType();
    this.newClient.type.id = this.idSelectedType;

    this.service.addItem(this.newClient)
      .subscribe(res => this.service.update());
  }

  onChangeType(id: string) {
    this.idSelectedType = id;
  }
}
