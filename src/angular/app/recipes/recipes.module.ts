import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { recipesRouting } from './recipes.routing';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes.component';

import { RecipeArrayService } from './recipe-array-service/recipe-array.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    recipesRouting
  ],
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeFormComponent,
    RecipesComponent
  ],
  providers: [
    RecipeArrayService
  ]
})
export class RecipesModule {}
