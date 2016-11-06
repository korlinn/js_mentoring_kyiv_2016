import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './common/about';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

import { routing } from './app.routing';

@NgModule({
    imports:      [
        BrowserModule,
        CommonModule,
        FormsModule,
        ProductsModule,
        UsersModule,
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        PageNotFoundComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }