import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products.component';
import { productsRouting } from './products.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        productsRouting
    ],

    declarations: [
        ProductFormComponent,
        ProductsComponent
    ],

    providers: [
    ]
})

export class ProductsModule {}