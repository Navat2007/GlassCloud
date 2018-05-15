import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TableComponent} from './table/table.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FooterComponent} from './footer/footer.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {OrdersComponent} from './orders/orders.component';
import {CompaniesComponent} from './companies/companies.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';
import {ReceptionsComponent} from './receptions/receptions.component';
import {ClientsComponent} from './clients/clients.component';
import {MaterialsComponent} from './materials/materials.component';
import {MaterialColorsComponent} from './material-colors/material-colors.component';
import {MaterialTypesComponent} from './material-types/material-types.component';
import {ProcessesComponent} from './processes/processes.component';
import {ProcessTypeComponent} from './process-type/process-type.component';
import {UsersComponent} from './users/users.component';
import {PermissionsComponent} from './permissions/permissions.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {SelectReceptionComponent} from './select-reception/select-reception.component';
import {AuthInterceptor} from './auth-interceptor';

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
    TableComponent,
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
    AuthService,
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
