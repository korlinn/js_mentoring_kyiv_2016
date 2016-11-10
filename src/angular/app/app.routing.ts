import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }        from './common/about';
import { PageNotFoundComponent } from './common/page-not-found';
import { LoginComponent }        from './common/login';

// import { load } from './async-ng-module-loader';

import { AuthGuard } from './guards/auth.guard';

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
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        //canLoad: [AuthGuard],
        loadChildren: '/+admin/admin.module#AdminModule'
        // loadChildren: load( () =>
        //     new Promise(resolve => {
        //         (require as any).ensure(
        //             [],
        //             require => {
        //                 resolve(require('./+admin/admin.module').AdminModule);
        //             }
        //         );
        //     })
        // )
},
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }