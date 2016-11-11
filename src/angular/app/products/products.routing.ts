import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSearchFormComponent } from './product-search-form';
import { ProductFormComponent } from './product-form';
import { ProductListComponent } from './product-list';
import { ProductsComponent } from './products.component';

import { AuthGuard } from './../guards/auth.guard';

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
            },
            {
                path: 'edit/:id',
                canActivate: [AuthGuard],
                component: ProductFormComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(productsRoutes)],
    exports: [RouterModule],
})
export class ProductRoutingModule { }