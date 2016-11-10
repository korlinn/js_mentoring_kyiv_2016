// import { ModuleWithProviders }  from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent }          from './admin.component';
import { ManageTasksComponent }    from './manage-tasks/manage-tasks.component';
import { ManageUsersComponent }    from './manage-users/manage-users.component';

import { ProductFormComponent } from '../products/product-form';

import { AuthGuard } from './../guards/auth.guard';

const adminRoutes: Routes = [{
  path: '',
  //canActivate: [AuthGuard],
  children: [
    {
      path: '',
      //canActivateChild: [AuthGuard],
      children: [
        // {
        //   path: 'addProduct',
        //   component: ProductFormComponent
        // },
        {
          path: 'tasks',
          component: ManageTasksComponent
        },
        {
          path: 'users',
          component: ManageUsersComponent
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