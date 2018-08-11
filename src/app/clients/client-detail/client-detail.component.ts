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
  clientTypeId?: string;

  constructor(
    public service: ClientService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getClient();
    this.service.updateTypes();
  }

  getClient(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getItem(id)
      .subscribe(json => {
        this.client = json.data;
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
    this.client.type = this.service.getById(this.clientTypeId);
    this.service.updateItem(this.client, this.client.id)
      .subscribe(json => this.client = json.data);
    this.disabled = true;
  }

  cancel() {
    this.disabled = true;
    this.getClient();
  }

  onChangeType(id: string) {
    this.clientTypeId = id;
  }
}
