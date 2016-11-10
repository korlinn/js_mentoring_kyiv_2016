import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ProductsModule } from './products/products.module';
import { UsersModule }    from './users/users.module';
//import { AdminModule }    from './admin/admin.module';

import { AppComponent }          from './app.component';
import { AboutComponent }        from './common/about';
import { LoginComponent }        from './common/login';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';


import { AppRoutingModule } from './app.routing';

@NgModule({
    imports:      [
        BrowserModule,
        CommonModule,
        FormsModule,
        ProductsModule,
        UsersModule,
        //AdminModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        PageNotFoundComponent,
        LoginComponent
    ],
    providers: [
        AuthGuard,
        AuthService

    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }