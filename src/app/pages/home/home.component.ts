import { Component, OnInit } from '@angular/core';
import {
  RandomRecipe, SingleRandomRecipe,
} from 'src/app/interfaces/api/randomApi.interface';
import { Store } from '@ngrx/store';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import { SpoonacularServiceMock } from 'src/app/services/spoonacular.mock.service';
import * as AllActions from '../home/state/home.actions';
import { HomeActions, HomeSelectors } from './state';
import { Observable } from 'rxjs';
import { FormSelectors } from '../form/state';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  // * Selectors
    randomRecipeAPI$: Observable<SingleRandomRecipe | undefined> = this.store.select(HomeSelectors.randomRecipeAPI)
  // * Finish selectors

  constructor(
    private spoonMockApi: SpoonacularServiceMock,
    private spoonApi: SpoonacularService,
    private store: Store
  ) {}

  public isLoading: boolean = false;
  public randomRecipes!: RandomRecipe;
  public recipes: any;
  public recipeImg: string = "";
  public recipeDescription: string = "";

  ngOnInit(): void {
    // this.getRecipes();
    // * Dispatch the action that calls the random API
    // this.store.dispatch(HomeActions.loadRandomRecipes())
    this.getRecipes();
  }



    getRecipes() {
    // * Real endpoint
    // this.spoonApi
    //   .getRandom()
    //   .subscribe((randomRecipes: SingleRandomRecipe) => {
    //     this.recipes = randomRecipes.recipes[0];
    //     this.randomRecipes = this.recipes
    //     this.isLoading = false;
    //     console.log(this.recipes, "home component")
    //   });
    // * Real endpoint
    let random = this.spoonMockApi.requestRandom().subscribe(
      (randomRecipes) => {
        console.log(randomRecipes)
        this.recipes = randomRecipes.recipes;
        this.randomRecipes = this.recipes[0];
        this.recipeImg = this.randomRecipes.image;
        this.recipeDescription = this.randomRecipes.summary
      },
      (error) => {
      }
    );
    return random;
  }
}
