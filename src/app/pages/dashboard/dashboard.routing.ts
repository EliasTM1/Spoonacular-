import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdvancedSearchComponent } from "../advanced-search/advanced-search.component";
import { HomeComponent } from "../home/home.component";
import { RecipeDetailsComponent } from "../recipe-details/recipe-details.component";
import { SavedRecipesComponent } from "../saved-recipes/saved-recipes.component";
import { SearchRecipesComponent } from "../search-recipes/search-recipes.component";
import { DashboardComponent } from "./dashboard.component";

const routes : Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: [
          {
            path: 'details/:recipeId',
            component: RecipeDetailsComponent
          }
        ]
      },
      {
        path: 'searchRecipes',
        component: SearchRecipesComponent
      },
      {
        path: 'advancedSearch',
        component: AdvancedSearchComponent
      },
      {
        path: 'savedRecipes',
        component: SavedRecipesComponent
      },
      {
        path: '**', redirectTo: 'home'
      }
    ]
  },

]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
