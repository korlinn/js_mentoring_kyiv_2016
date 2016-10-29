import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
// The router will match this route if the URL requested
// doesn't match any paths for routes defined in our configuration
        path: '**',
        redirectTo: 'home',
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);