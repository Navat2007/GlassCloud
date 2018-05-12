import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import {AppRoutingModule} from './app-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ReceptionsComponent } from './receptions/receptions.component';
import { ClientsComponent } from './clients/clients.component';
import { MaterialsComponent } from './materials/materials.component';
import { MaterialColorsComponent } from './material-colors/material-colors.component';
import { MaterialTypesComponent } from './material-types/material-types.component';
import { ProcessesComponent } from './processes/processes.component';
import { ProcessTypeComponent } from './process-type/process-type.component';
import { UsersComponent } from './users/users.component';
import { PermissionsComponent } from './permissions/permissions.component';

const appRoutes: Routes = [
  { path: 'order', component: AppComponent }
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
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
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
    PermissionsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
