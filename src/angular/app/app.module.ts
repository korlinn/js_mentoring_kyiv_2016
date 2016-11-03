import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { AsyncNgModuleLoader} from './async-ng-module-loader';

import { ProductsModule } from './products/products.module';
import { RecipesModule } from './recipes/recipes.module';
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
        RecipesModule,
        UsersModule,
        routing
    ],
    // providers: [{
    //     provide: NgModuleFactoryLoader,
    //     useClass: AsyncNgModuleLoader
    // }],
    declarations: [
        AppComponent,
        AboutComponent,
        PageNotFoundComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }