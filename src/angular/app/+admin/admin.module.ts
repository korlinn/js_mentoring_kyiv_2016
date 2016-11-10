import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent }          from './admin.component';
import { ManageTasksComponent }    from './manage-tasks/manage-tasks.component';
import { ManageUsersComponent }    from './manage-users/manage-users.component';

import { AdminRoutingModule } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
  ],
  declarations: [
    AdminComponent,
    ManageTasksComponent,
    ManageUsersComponent
  ],
  providers: [
  ]
})
export class AdminModule {}