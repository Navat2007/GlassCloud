import {Component, OnInit} from '@angular/core';
import {ReceptionService} from '../reception.service';
import {Reception} from '../reception';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentReception: Reception[] = [];

  constructor(
    private receptionService: ReceptionService
  ) { }

  ngOnInit() {
    this.getCurrentReception();
  }

  getCurrentReception(): void {
    this.receptionService.getCurrentReception()
      .subscribe(currentReception => this.currentReception = currentReception);
  }
}
