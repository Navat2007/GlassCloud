import {Component, OnInit} from '@angular/core';
import {ReceptionService} from '../services/reception.service';
import {Reception} from '../reception';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentReception?: Reception;

  constructor(
    public receptionService: ReceptionService,
    private as: AuthService, private router: Router,
    public userService: UserService,
  ) {
  }

  ngOnInit() {
    this.getCurrentReception();
  }

  getCurrentReception(): void {
    this.receptionService.getCurrentReception()
      .subscribe(currentReception => this.currentReception = currentReception);
  }

  logout(): void {
    this.as.logout().subscribe((isAuth: boolean) => {
      if (!isAuth) {
        this.router.navigate(['/login']);
      }
    });
  }
}
