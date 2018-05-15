import {Component, OnInit} from '@angular/core';
import {ReceptionService} from '../services/reception.service';
import {Reception} from '../reception';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentReception?: Reception;

  constructor(
    private receptionService: ReceptionService,
    private as: AuthService, private router: Router
  ) { }

  ngOnInit() {
    console.log('init NavBarComponent');
    this.getCurrentReception();
  }

  getCurrentReception(): void {
    this.receptionService.getCurrentReception()
      .subscribe(currentReception => this.currentReception = currentReception);
  }

  logout(): void {
    this.as.logout().subscribe((isAuth: boolean) => {
      if (!isAuth) {
        console.log('logout');
        this.router.navigate(['/login']);
      }
    });
  }
}
