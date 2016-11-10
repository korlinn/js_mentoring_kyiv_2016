import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent }      from './admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard }           from './../guards/auth.guard';

const adminRoutes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      canActivateChild: [AuthGuard],
      children: [
        {
          path: 'addProduct',
          component: AddProductComponent
        },
        {
          path: '',
          component: AdminComponent
        }
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }