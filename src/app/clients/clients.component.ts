import {Component, OnInit} from '@angular/core';
import {Client} from '../client';
import {environment} from '../../environments/environment';
import {GlassServiceService} from '../services/glass-service.service';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(
    public service: ClientService,
  ) {
  }

  ngOnInit() {
    this.service.update();
  }



}
