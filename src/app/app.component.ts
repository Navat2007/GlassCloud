import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {ReceptionService} from './services/reception.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Glass cloud';

  constructor(
    public authService: AuthService,
    public receptionService: ReceptionService
  ) {  }

  ngOnInit() {
    this.receptionService.getCurrentReception().subscribe(res => console.log('reception = ' + res));
    this.authService.isAuth().subscribe(res => console.log('as = ' + res));
  }

  // private _isAuth() {
  //   this.as._isAuth().subscribe(res => {
  //     console.log('res = ' + res);
  //     this._isAuth = res;
  //   });
  // }

  // test() {
  //   // this.receptionService.receptionSelected = !this.receptionService.receptionSelected;
  //   // this.authService._isAuth = !this.authService._isAuth;
  //   console.log('app component rec = ' + this.receptionService.receptionSelected);
  //   console.log('app component as = ' + this.authService._isAuth);
  // }
}
