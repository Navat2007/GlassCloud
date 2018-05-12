import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrdersComponent} from './orders/orders.component';
import {CompaniesComponent} from './companies/companies.component';
import {ReceptionsComponent} from './receptions/receptions.component';

const routes: Routes = [
  { path: '', redirectTo: '/order', pathMatch: 'full' },
  { path: 'order/:id', component: OrderDetailComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'company', component: CompaniesComponent },
  { path: 'reception', component: ReceptionsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
