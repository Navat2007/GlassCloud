import { Component, OnInit } from '@angular/core';
import {Client} from '../client';
import {clients} from '../mock-dtos';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor() { }

  ngOnInit() {
    this.clients = clients;
  }

}
