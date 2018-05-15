import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FooterComponent} from './footer/footer.component';
import {OrderDetailComponent} from './orders/order-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {OrdersComponent} from './orders/orders.component';
import {CompaniesComponent} from './companies/companies.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';
import {ReceptionsComponent} from './receptions/receptions.component';
import {ClientsComponent} from './clients/clients.component';
import {MaterialsComponent} from './materials/materials.component';
import {MaterialColorsComponent} from './materials/material-colors.component';
import {MaterialTypesComponent} from './materials/material-types.component';
import {ProcessesComponent} from './processes/processes.component';
import {ProcessTypeComponent} from './processes/process-type.component';
import {UsersComponent} from './users/users.component';
import {PermissionsComponent} from './permissions/permissions.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from './services/auth.service';
import {SelectReceptionComponent} from './select-reception/select-reception.component';
import {AuthInterceptor} from './auth-interceptor';
import {AuthGuard} from './auth.guard';
import {ReceptionGuard} from './reception.guard';

const appRoutes: Routes = [
  {path: 'order', component: AppComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),

    HttpClientModule,
    HttpClientXsrfModule,
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    OrderDetailComponent,
    OrdersComponent,
    CompaniesComponent,
    CompanyDetailsComponent,
    ReceptionsComponent,
    ClientsComponent,
    MaterialsComponent,
    MaterialColorsComponent,
    MaterialTypesComponent,
    ProcessesComponent,
    ProcessTypeComponent,
    UsersComponent,
    PermissionsComponent,
    LoginComponent,
    SelectReceptionComponent
  ],
  providers: [
    // AuthService,
    AuthGuard,
    ReceptionGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
