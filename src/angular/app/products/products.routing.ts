import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form';

const productsRoutes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            {
                path: '',
                component: ProductFormComponent
            },
            {
                path: 'find',
                component: ProductFormComponent
            }
        ]
    }
];

export const productsRouting: ModuleWithProviders = RouterModule.forChild(productsRoutes);