import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Recipe } from './../../models/recipe';

let recipeList = [
  new Recipe(1, 'food1', 'sdfsaf', 'dfgdfg'),
  new Recipe(2, 'food2', 'dgfdg', 'dfgdfg'),
  new Recipe(3, 'food3', 'dgfdfg', 'dfgsdg')
];

let recipeListPromise = Promise.resolve(recipeList);

@Injectable()
export class RecipeArrayService {
  getRecipes() {
    return recipeListPromise;
  }

  getRecipe(id: number) {
    return this.getRecipes()
      .then(users => users.find(recipe => recipe.id === id));
  }

  addRecipe(recipe: Recipe) {
    recipeList.push(recipe);
  }

  updateRecipe(recipe: Recipe) {
    let i = -1;

    recipeList.forEach((item, index) => {
      if (item.id === recipe.id ) {
        i = index;
        return false;
      }
    });

    if (i > -1) {
      recipeList.splice(i, 1, recipe);
    }
  }
}
