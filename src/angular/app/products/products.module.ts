import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductChartComponent } from './product-chart/product-chart.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductSearchFormComponent } from './product-search-form/product-search-form.component';
import { ProductCalorieResultComponent } from './product-calorie-result/product-calorie-result.component';
import { ProductsComponent } from './products.component';
import { ProductRoutingModule } from './products.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule,
        HttpModule
    ],
    exports: [
    ],
    declarations: [
        ProductFormComponent,
        ProductSearchFormComponent,
        ProductCalorieResultComponent,
        ProductListComponent,
        ProductChartComponent,
        ProductComponent,
        ProductsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProductsModule {}