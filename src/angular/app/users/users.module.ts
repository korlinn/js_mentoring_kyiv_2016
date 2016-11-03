import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { usersRouting } from './users.routing';

import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';

import { UserArrayService } from './user-array-service/user-array.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    usersRouting
  ],
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserComponent,
    UsersComponent
  ],
  providers: [
    UserArrayService,
  ]
})
export class UsersModule {}
