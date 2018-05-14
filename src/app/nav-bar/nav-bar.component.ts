import {Component, OnInit} from '@angular/core';
import {ReceptionService} from '../reception.service';
import {Reception} from '../reception';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentReception: Reception[] = [];

  constructor(
    private receptionService: ReceptionService,
    private as: AuthService, private router: Router
  ) { }

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
        console.log('logout');
        this.router.navigate(['/login']);
      }
    });
  }
}
