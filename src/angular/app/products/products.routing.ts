import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './product-form';
import { ProductListComponent } from './product-list';
import { ProductComponent } from './product';
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
                component: ProductFormComponent
            },
            {
                path: 'list',
                component: ProductListComponent
            },
            {
                path: 'details',
                component: ProductComponent
            }
        ]
    }
];

export const productsRouting: ModuleWithProviders = RouterModule.forChild(productsRoutes);