import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from './../../models/recipe';
import { RecipeArrayService } from './../recipe-array-service/recipe-array.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipe: Array<Recipe>;
  // private selectedUserId: number;
  private sub: Subscription;

  constructor(
    private recipeService: RecipeArrayService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.usersService.getRecipes()
    //       .then(users => this.users = users);
    //
    // // listen id from UserFormComponent
    // this.sub = this.route.params
    //   .subscribe(params => {
    //     let id = +params['id'];
    //     if (id) {
    //       this.selectedUserId = +params['id'];
    //       console.log(`Last time you edit user with id ${this.selectedUserId}`);
    //     }
    //   });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
