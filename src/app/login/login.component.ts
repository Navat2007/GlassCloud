import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {name: '', password: '', rememberMe: 'false'};
  authError = false;

  constructor(private as: AuthService, private router: Router, private title: Title,
              private ac: AppComponent) {
  }

  ngOnInit() {
  }

  login(): void {
    this.as.login(this.credentials).subscribe((isAuth: boolean) => {
      if (isAuth) {
        console.log('/select-reception');
        this.authError = false;
        this.router.navigate(['/select-reception']);
        return;
      } else {
        console.log('/login');
        this.authError = true;
      }
    });

    this.authError = true;
  }
}
