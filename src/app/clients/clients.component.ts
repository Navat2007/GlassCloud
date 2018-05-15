import {Component, OnInit} from '@angular/core';
import {Client} from '../client';
import {environment} from '../../environments/environment';
import {GlassServiceService} from '../services/glass-service.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  private serviceUrl = environment.serverHost + '/api/client';

  clients: Client[];

  constructor(
    private service: GlassServiceService<Client>
  ) {
    this.service.setUrl(this.serviceUrl).setName('client');
  }

  ngOnInit() {
    this.getProcessTypes();
  }

  getProcessTypes(): void {
    this.service.getItems()
      .subscribe(items => this.clients = items);
  }

}
