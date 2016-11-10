import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent }    from './users.component';
import { UserListComponent } from './user-list';
import { UserFormComponent } from './user-form';
import { UserResolveGuard }  from './../guards/user-resolve.guard';

const usersRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserListComponent
      },
      {
        path: 'add',
        component: UserFormComponent
      },
      {
        path: 'edit/:id',
        component: UserFormComponent,
        resolve: {
          user: UserResolveGuard
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
