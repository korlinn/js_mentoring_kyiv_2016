import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
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
        ProductListComponent,
        ProductComponent,
        ProductsComponent
    ],

    providers: [
    ]
})

export class ProductsModule {}