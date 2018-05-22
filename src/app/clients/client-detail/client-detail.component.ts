import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../client';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  @Input() client: Client;
  disabled = true;
  clientTypeId?: number;

  constructor(
    public service: ClientService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getClient();
  }

  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getItem(id)
      .subscribe(client => {
        this.client = client;
        this.clientTypeId = this.client.type.id;
      });
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.disabled = false;
  }

  save(): void {
    this.client.type.id = this.clientTypeId;
    this.service.updateItem(this.client, this.client.id)
      .subscribe(res => this.client = res);
    this.disabled = true;
  }

  cancel() {
    this.disabled = true;
    this.getClient();
  }
}
