import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ProductArrayService } from './product-array-service/product-array.service';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchFormComponent } from './product-search-form/product-search-form.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { ProductRoutingModule } from './products.routing';

//import { ProductFormModule } from './product-form/product-form.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule,
        HttpModule
    ],
    exports: [
        //ProductFormModule
        // ProductArrayService,
        // ProductModel
    ],
    declarations: [
        //ProductFormComponent,
        ProductSearchFormComponent,
        ProductListComponent,
        ProductComponent,
        ProductsComponent
    ],

    providers: [
        ProductArrayService
    ]
})

export class ProductsModule {}