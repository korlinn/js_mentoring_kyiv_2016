import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './recipe';
import { RecipeListComponent } from './recipe-list';
import { RecipeFormComponent } from './recipe-form';

const usersRoutes: Routes = [
  {
    path: 'users',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeListComponent
      },
      {
        path: 'show',
        component: RecipeComponent
      },
      {
        path: 'find',
        component: RecipeFormComponent,
      }
    ]
  }
];

export const recipesRouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);
