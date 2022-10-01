import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { randomRecipesMocks } from 'mocks/tsMocks/randomRecipes.mocks';
import { recipeTasteMocks } from 'mocks/tsMocks/recipeTaste.mocks';
import { recipeEquipmentMocks } from 'mocks/tsMocks/recipeEquipment.mocks';
import { priceBreakdownMocks } from 'mocks/tsMocks/recipePriceBreakdown.mocks';
import { RecipeNutritionMocks } from 'mocks/tsMocks/recipeNutrition.mocks';
import { RecipesIngredientsMocks } from 'mocks/tsMocks/recipeIngredients.mocks';

@Injectable({
  providedIn: 'root',
})
export class SpoonacularServiceMock {
  public randomRecipes = randomRecipesMocks;
  public recipeTaste = recipeTasteMocks;
  public recipeEquipment = recipeEquipmentMocks;
  public getRecipeNutrition = RecipeNutritionMocks;
  public priceBreakdown = priceBreakdownMocks;
  public getRecipesIngredients = RecipesIngredientsMocks;

  requestRandom() {
    return of(this.randomRecipes);
  }

  requestRecipeTaste() {
    return of(this.recipeTaste);
  }

  requestRecipeIngredients() {
    return of(this.getRecipesIngredients);
  }

  requestPriceBreakdown() {
    return of(this.priceBreakdown);
  }

  requestRecipeEquipment() {
    return of(this.recipeEquipment);
  }

  requestRecipeNutrition() {
    return of(this.getRecipeNutrition);
  }


}
