import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {name: '', password: ''};

  constructor(private as: AuthService, private router: Router, private title: Title,
              private ac: AppComponent) { }

  ngOnInit() {
  }

  login(): void {
    this.as.login(this.credentials).subscribe((isAuth: boolean) => {
      if (isAuth) {
        console.log('/order');
        this.router.navigate(['/login-reception-of-order']);
      } else {
        console.log('/login');
      }
    });
  }
}
