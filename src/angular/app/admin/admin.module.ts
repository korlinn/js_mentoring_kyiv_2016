import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import

import { AdminComponent }          from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageTasksComponent }    from './manage-tasks/manage-tasks.component';
import { ManageUsersComponent }    from './manage-users/manage-users.component';

import { adminRouting } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    adminRouting
  ],
  exports: [
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageTasksComponent,
    ManageUsersComponent
  ],
  providers: [
  ]
})
export class AdminModule {}