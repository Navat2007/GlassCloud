import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrderDetailComponent} from './orders/order-detail.component';
import {OrdersComponent} from './orders/orders.component';
import {CompaniesComponent} from './companies/companies.component';
import {ReceptionsComponent} from './receptions/receptions.component';
import {ClientsComponent} from './clients/clients.component';
import {MaterialColorsComponent} from './materials/material-colors.component';
import {MaterialTypesComponent} from './materials/material-types.component';
import {MaterialsComponent} from './materials/materials.component';
import {ProcessesComponent} from './processes/processes.component';
import {ProcessTypeComponent} from './processes/process-type.component';
import {UsersComponent} from './users/users.component';
import {PermissionsComponent} from './permissions/permissions.component';
import {LoginComponent} from './login/login.component';
import {SelectReceptionComponent} from './select-reception/select-reception.component';

const routes: Routes = [
  // { path: '', redirectTo: '/order', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'select-reception', component: SelectReceptionComponent },
  { path: 'order/:id', component: OrderDetailComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'company', component: CompaniesComponent },
  { path: 'reception', component: ReceptionsComponent },
  { path: 'client', component: ClientsComponent },
  { path: 'material', component: MaterialsComponent },
  { path: 'material-color', component: MaterialColorsComponent },
  { path: 'material-type', component: MaterialTypesComponent },
  { path: 'process', component: ProcessesComponent },
  { path: 'process-type', component: ProcessTypeComponent },
  { path: 'user', component: UsersComponent },
  { path: 'permission', component: PermissionsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
