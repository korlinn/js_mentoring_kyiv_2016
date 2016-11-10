import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent }          from './admin.component';
import { AddProductComponent }     from './add-product/add-product.component';

// import { ProductFormModule } from '../products/product-form/product-form.module';

import { AdminRoutingModule } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    // ProductFormModule
  ],
  exports: [
  ],
  declarations: [
    AdminComponent,
    AddProductComponent
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule {}