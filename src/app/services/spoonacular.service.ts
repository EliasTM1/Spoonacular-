import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MAIN_URL } from './http.constants';
import {SEARCH_TYPE} from './http.constants'
import {RandomRecipe} from '../interfaces/api/random.interface'
import { IRandomRecipes } from './spoonacular.service.interface';
@Injectable({
  providedIn: 'root',
})
export class SpoonacularService implements IRandomRecipes {
  // * http
  private readonly _randomRecipes = new BehaviorSubject<Array<any>>([]);
  // * UI controls
  private readonly _isLoading = new BehaviorSubject<Array<boolean>>([]);
  private readonly _error = new BehaviorSubject<Array<any>>([]);

  constructor(private http: HttpClient) {}

  private spoonacularURL: string = 'https://api.spoonacular.com/recipes/';
  private spoonKey: string = 'apiKey=5db54fcf60f449489d5bb1c052bde991';

  // requestRandom() {
  //   return  this.http
  //     .get(`${this.spoonacularURL}${SEARCH_TYPE.RANDOM}?${this.spoonKey}`)
  //     .subscribe((data) => {
  //       console.log(data, '<====');
  //     });
  // }

  requestRandom() {
    return  this.http.get('/api/random') as Observable<unknown>
  }

  getRecipesByIngredient() {
    return  this.http
      .get(`${this.spoonacularURL}random?${this.spoonKey}`)
      .subscribe((data) => {
        console.log(data, '<====');
      });
  }

  getRecipesById() {
    return  this.http
      .get(`${this.spoonacularURL}random?${this.spoonKey}`)
      .subscribe((data) => {
        console.log(data, '<====');
      });
  }

  getRecipesImagesJust () {
    return  this.http
      .get(`${this.spoonacularURL}random?${this.spoonKey}`)
      .subscribe((data) => {
        console.log(data, '<====');
      });
  }

  getRecipesByQueryHey () {
    return  this.http
      .get(`${this.spoonacularURL}random?${this.spoonKey}`)
      .subscribe((data) => {
        console.log(data, '<====');
      });
  }
}
// * https://api.spoonacular.com/recipes/random?apiKey=5db54fcf60f449489d5bb1c052bde991
