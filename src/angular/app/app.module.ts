import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { AsyncNgModuleLoader} from './async-ng-module-loader';

import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

@NgModule({
    imports:      [
        BrowserModule,
        CommonModule,
        FormsModule,
        ProductsModule,
        routing
    ],
    // providers: [{
    //     provide: NgModuleFactoryLoader,
    //     useClass: AsyncNgModuleLoader
    // }],
    declarations: [ AppComponent, PageNotFoundComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }