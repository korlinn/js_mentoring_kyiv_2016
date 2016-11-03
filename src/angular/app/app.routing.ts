import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './common/about';
import { PageNotFoundComponent } from './common/page-not-found';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
// The router will match this route if the URL requested
// doesn't match any paths for routes defined in our configuration
        path: '**',
        component: PageNotFoundComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);