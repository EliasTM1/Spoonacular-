import {createFeatureSelector, createSelector} from '@ngrx/store';
// *     Reducer Key   Stored RNDM intrfc
import { StoredRandmRecipe, homeStateKey } from './home.reducer'

const randomRecipeState = createFeatureSelector<StoredRandmRecipe>(homeStateKey);

//  * General details
/*
* Title
* Image
* Ingredients
* Summary
*/
//  * Widgets
/*
* Recipe Taste
*/

export const title = createSelector(
  randomRecipeState,
  (randomRecipeState) => randomRecipeState.title
)

export const image = createSelector(
  randomRecipeState,
  (randomRecipeState) => randomRecipeState.image
)

export const ingredients = createSelector(
  randomRecipeState,
  (randomRecipeState) => randomRecipeState.extendedIngredients
)

export const summary = createSelector(
  randomRecipeState,
  (randomRecipeState) => randomRecipeState.summary
)

export const randomRecipeAPI = createSelector(
  randomRecipeState,
  (randomRecipeState) => randomRecipeState.fromRandomRecipeAPI
)

//  * Widgets

export const recipeTaste = createSelector(
  randomRecipeState,
  (randomRecipeState) => randomRecipeState.recipeTaste
)

