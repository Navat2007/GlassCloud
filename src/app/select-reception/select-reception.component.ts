import {Component, OnInit} from '@angular/core';
import {ReceptionService} from '../reception.service';
import {Reception} from '../reception';

@Component({
  selector: 'app-select-reception',
  templateUrl: './select-reception.component.html',
  styleUrls: ['./select-reception.component.css']
})
export class SelectReceptionComponent implements OnInit {

  receptions: Reception[];
  id: number;

  constructor(private service: ReceptionService) { }

  ngOnInit() {
    this.getReceptions();
  }

  getReceptions() {
    this.service.getReceptions()
      .subscribe(receptions => this.receptions = receptions);
  }

  selectReception() {
    this.service.selectReception(this.id);
  }
}
