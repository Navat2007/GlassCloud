import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrderDetailComponent} from './order-detail/order-detail.component';
import {TableComponent} from './table/table.component';

const routes: Routes = [
  { path: 'api/order/:id', component: OrderDetailComponent },
  { path: 'orders', component: TableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
