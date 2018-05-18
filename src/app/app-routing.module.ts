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
import {AuthGuard} from './auth.guard';
import {ReceptionGuard} from './reception.guard';
import {MaterialDetailComponent} from './materials/material-detail/material-detail.component';
import {ProcessDetailComponent} from './processes/process-detail/process-detail.component';
import {OrderItemDetailComponent} from './orders/order-item-detail/order-item-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'select-reception', component: SelectReceptionComponent, canActivate: [AuthGuard] },
  { path: 'order/item/:id', component: OrderItemDetailComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'order/:id', component: OrderDetailComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'order', component: OrdersComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'company', component: CompaniesComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'reception', component: ReceptionsComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'client', component: ClientsComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'material/:id', component: MaterialDetailComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'material', component: MaterialsComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'material-color', component: MaterialColorsComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'material-type', component: MaterialTypesComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'process', component: ProcessesComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'process/:id', component: ProcessDetailComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'process-type', component: ProcessTypeComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'user', component: UsersComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: 'permission', component: PermissionsComponent, canActivate: [AuthGuard, ReceptionGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
