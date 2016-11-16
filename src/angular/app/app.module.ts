import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ProductArrayService } from './products/product-array-service/product-array.service';

import { ProductsModule } from './products/products.module';
import { UsersModule }    from './users/users.module';

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
        // ProductFormModule,
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
        AuthService,
        ProductArrayService

    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }