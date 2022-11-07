import { createAction, props } from '@ngrx/store';
import { SingleRandomRecipe } from 'src/app/interfaces/api/randomApi.interface';
import {
  EquipmentById,
  IngredientsById,
  NutritionById,
  PriceBreakdownId,
  TasteById,
} from 'src/app/interfaces/api/widgets.interface';
import { StoredRandmRecipe } from './home.reducer';

export enum HomeActionNames {
  // * Effects
  loadErrorAPI = '[Home Page] Error',
  loadRandomRecipes = '[Home Page] API Loading',
  loadRandomRecipesSuccess = '[Home Page] Spoon RandomRecipes Loading',
  // * Effects finish
  setRandomRecipe = '[Home Page] Store random',
  setRandomTaste = '[Home Page] Taste random',
  setRandomEquipment = '[Home Page] Equipment random',
  setRandomPriceBrk = '[Home Page] PriceBrk random',
  setRandomIngredients = '[Home Page] Ingredients random',
  setRandomNutrition = '[Home Page] Nutrition random',
}

// * Effects
export const loadRandomRecipes = createAction(
  HomeActionNames.loadRandomRecipes,
);

export const loadErrorAPI = createAction(
  HomeActionNames.loadErrorAPI
);

export const loadRandomRecipesSuccess = createAction(
  HomeActionNames.loadRandomRecipesSuccess,
  props<{ randomRecipes: SingleRandomRecipe }>()
);
// * Effects finish

export const storeRandomRecipe = createAction(
  HomeActionNames.setRandomRecipe,
  props<{ storedRandomRecipe: StoredRandmRecipe }>()
);

export const storeRandomTaste = createAction(
  HomeActionNames.setRandomTaste,
  props<{ tasteByID: TasteById }>()
);

export const storeRandomIngredients = createAction(
  HomeActionNames.setRandomIngredients,
  props<{ ingredientsById: IngredientsById }>()
);

export const storeRandomEquipment = createAction(
  HomeActionNames.setRandomEquipment,
  props<{ EquipmentById: EquipmentById }>()
);

export const storeRandomPriceBrk = createAction(
  HomeActionNames.setRandomPriceBrk,
  props<{ PriceBreakdownId: PriceBreakdownId }>()
);

export const storeRandomNutrition = createAction(
  HomeActionNames.setRandomNutrition,
  props<{ NutritionById: NutritionById }>()
);
