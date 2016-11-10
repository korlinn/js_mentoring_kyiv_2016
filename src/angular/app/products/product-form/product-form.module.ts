import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductFormComponent } from './product-form.component';

@NgModule({
    declarations: [ProductFormComponent],
    exports: [ProductFormComponent],
    //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProductFormModule { }