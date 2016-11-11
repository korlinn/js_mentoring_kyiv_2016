import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService }      from './../services/auth.service';

@Injectable()
export class ProductResolveGuard implements Resolve<boolean> {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot): boolean {
        console.log("ProductResolveGuard");
        return this.authService.checkLogin();
    }
}