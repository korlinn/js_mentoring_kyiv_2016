import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { User }             from './../users/user.model';
import { UserArrayService } from './../users/user-array-service/user-array.service';
import { AuthService }      from './../services/auth.service';

@Injectable()
export class UserResolveGuard implements Resolve<User> {

  constructor(
    private userArrayService: UserArrayService,
    private authService     : AuthService,
    private router: Router
  ) {}
  
  resolve(route: ActivatedRouteSnapshot): Promise<boolean> {
    let id = route.params['id'];
    console.log('UserResolveGuard: ' + id);

    return this.userArrayService.getUser(id)
        .then(user => {
          if (user && user.email == this.authService.getUserToken()) {
            return true;
          }
          else {
            this.router.navigate(['/users']);
            return false;
          }
        });
  }
}