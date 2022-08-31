import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { IRandomRecipes } from './spoonacular.service.interface';
import { randomRecipesMocks } from 'mocks/tsMocks/randomRecipes.mocks';


// /Users/hm1/Documents/AAAjobHunt/angularSandbox/reactive/mocks/data/randomRecipes.json
@Injectable({
  providedIn: 'root',
})
export class SpoonacularServiceMock implements IRandomRecipes {
  public randomRecipes = randomRecipesMocks
  // * http
  public readonly _randomRecipes = new BehaviorSubject<Array<any>>([]);
  public readonly _searchByIngredient = new BehaviorSubject<Array<any>>([]);
  public readonly _recipeDetails = new BehaviorSubject<Array<any>>([]);
  // * UI controls
  public readonly _isLoading = new BehaviorSubject<Array<boolean>>([]);
  public readonly _error = new BehaviorSubject<Array<any>>([]);

  requestRandom() {
    return of(this.randomRecipes);
  }

}
