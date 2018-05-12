import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrdersComponent} from './orders/orders.component';
import {CompaniesComponent} from './companies/companies.component';
import {ReceptionsComponent} from './receptions/receptions.component';
import {ClientsComponent} from './clients/clients.component';
import {MaterialColorsComponent} from './material-colors/material-colors.component';
import {MaterialTypesComponent} from './material-types/material-types.component';
import {MaterialsComponent} from './materials/materials.component';
import {ProcessesComponent} from './processes/processes.component';
import {ProcessTypeComponent} from './process-type/process-type.component';
import {UsersComponent} from './users/users.component';
import {PermissionsComponent} from './permissions/permissions.component';

const routes: Routes = [
  { path: '', redirectTo: '/order', pathMatch: 'full' },
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
