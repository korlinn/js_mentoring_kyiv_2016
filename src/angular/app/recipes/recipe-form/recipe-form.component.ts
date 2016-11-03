import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Recipe } from './../../models/recipe';
import { RecipeArrayService } from './../recipe-array-service/recipe-array.service';

@Component({
  selector: 'recipe-form',
  templateUrl: 'recipe-form.component.html'
})
export class RecipeFormComponent implements OnInit, OnDestroy {
  user: Recipe;
  oldUser: Recipe;
  private sub: Subscription;

  constructor(
    private recipeService: RecipeArrayService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.user = new Recipe(null, '', '');
    //
    // this.sub = this.route.params.subscribe(params => {
    //   let id = +params["id"];
    //
    //   // NaN - for new user, id - for edit
    //   if (id) {
    //     this.usersService.getUser(id)
    //       .then(user => {
    //         this.user = Object.assign({}, user);
    //         this.oldUser = user;
    //       });
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // saveUser() {
  //   console.log("save")
  //   let user = new User(
  //     this.user.id,
  //     this.user.firstName,
  //     this.user.lastName
  //   );
  //
  //   if (user.id) {
  //     this.usersService.updateUser(user);
  //     this.oldUser = this.user;
  //     // optional parameter: http://localhost:4200/users;id=2
  //     this.router.navigate(['/users', {id: user.id}]);
  //   }
  //   else {
  //     this.usersService.addUser(user);
  //     this.oldUser = this.user;
  //     this.router.navigate(['/users']);
  //   }
  // }
  //
  // goBack() {
  //    this.router.navigate(['./../../'], { relativeTo: this.route});
  // }
}
