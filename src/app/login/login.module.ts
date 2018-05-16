import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }
