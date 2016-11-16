import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { AdminComponent }      from './admin.component';
import { AddProductComponent } from './add-product/add-product.component';

import { AdminRoutingModule } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  exports: [
  ],
  declarations: [
    AdminComponent,
    AddProductComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule {}