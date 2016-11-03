import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from './../../models/recipe';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
})
export class RecipeComponent {
  @Input() recipe: Recipe;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  editRecipe(recipe: Recipe) {
  	let link = ['recipe/edit', recipe.id];
    this.router.navigate(link);
  }
}
