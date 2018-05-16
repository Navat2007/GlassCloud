import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Glass cloud';
  _isAuth = false;

  constructor(
    private as: AuthService,
  ) {

  }

  ngOnInit() {
    this.isAuth();
  }

  private isAuth() {
    this.as.isAuth().subscribe(res => this._isAuth = res);
  }
}
