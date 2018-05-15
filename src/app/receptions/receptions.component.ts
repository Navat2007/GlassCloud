import {Component, OnInit} from '@angular/core';
import {Reception} from '../reception';
import {environment} from '../../environments/environment';
import {GlassServiceService} from '../services/glass-service.service';

@Component({
  selector: 'app-receptions',
  templateUrl: './receptions.component.html',
  styleUrls: ['./receptions.component.css']
})
export class ReceptionsComponent implements OnInit {

  private serviceUrl = environment.serverHost + '/api/receptionOfOrder';

  receptions: Reception[];

  constructor(
    private service: GlassServiceService<Reception>
  ) {
    this.service.setUrl(this.serviceUrl).setName('receptionOfOrder');
  }

  ngOnInit() {
    this.getProcessTypes();
  }

  getProcessTypes(): void {
    this.service.getItems()
      .subscribe(items => this.receptions = items);
  }

  delete(reception: Reception): void {
    console.log('edit reception');
  }
  edit(reception: Reception): void {
    console.log('edit reception');
  }

}
