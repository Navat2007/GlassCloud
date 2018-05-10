import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import {AppRoutingModule} from './app-routing.module';
import { OrdersComponent } from './orders/orders.component';

const appRoutes: Routes = [
  { path: 'glass/order', component: AppComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TableComponent,
    NavBarComponent,
    FooterComponent,
    OrderDetailComponent,
    OrdersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
