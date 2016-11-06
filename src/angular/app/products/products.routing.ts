import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './product-form';
import { ProductSearchFormComponent } from './product-search-form';
import { ProductListComponent } from './product-list';
import { ProductsComponent } from './products.component';

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
            },            {
                path: 'add',
                component: ProductFormComponent
            },
            {
                path: 'edit/:id',
                component: ProductFormComponent
            },
            {
                path: 'list',
                component: ProductListComponent
            }
        ]
    }
];

export const productsRouting: ModuleWithProviders = RouterModule.forChild(productsRoutes);