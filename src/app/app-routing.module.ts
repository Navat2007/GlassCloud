import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrdersComponent} from './orders/orders.component';

const routes: Routes = [
  { path: 'order/:id', component: OrderDetailComponent },
  { path: 'order', component: OrdersComponent },
  { path: '', redirectTo: '/order', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
