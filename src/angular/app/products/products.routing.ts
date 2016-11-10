import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSearchFormComponent } from './product-search-form';
import { ProductListComponent }       from './product-list';
import { ProductsComponent }          from './products.component';

const productsRoutes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: 'find',
                component: ProductSearchFormComponent
            },
            {
                path: 'list',
                component: ProductListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(productsRoutes)],
    exports: [RouterModule],
})
export class ProductRoutingModule { }