import { Action, createReducer, on } from '@ngrx/store';
import { IngredientsService } from 'src/app/ingredients.service';
import {
  AnalyzedInstruction,
  ExtendedIngredient,
} from 'src/app/interfaces/api/randomApi.interface';
import {
  EquipmentById,
  IngredientsById,
  NutritionById,
  PriceBreakdownId,
  TasteById,
} from 'src/app/interfaces/api/widgets.interface';
import { HomeActions } from './index';
import { SingleRandomRecipe } from '../../../interfaces/api/randomApi.interface';

export const homeStateKey = 'homeState';

export interface StoredRandmRecipe {
  isLoadingAPI: boolean;
  errorAPI: boolean;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  image: string;
  id: number;
  aggregateLikes: number;
  instructions: string;
  title: string;
  summary: string;
  analyzedInstructions: AnalyzedInstruction[];
  extendedIngredients: ExtendedIngredient[];
  // * Widgets API
  recipeTaste?: TasteById;
  recipeNutrition?: NutritionById | undefined;
  recipeEquipment?: EquipmentById | undefined;
  recipePriceBreakdown?: PriceBreakdownId | undefined;
  recipeIngredient?: IngredientsById | undefined;
  fromRandomRecipeAPI: SingleRandomRecipe | undefined;
}

export const initialState: StoredRandmRecipe = {
  //  * API
  isLoadingAPI: false,
  errorAPI: false,
  //  * API
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: false,
  cheap: false,
  instructions: '',
  image: '',
  id: 0,
  title: '',
  summary: '',
  aggregateLikes: 0,
  analyzedInstructions: [],
  extendedIngredients: [],
  //  * Widgets API
  recipeTaste: undefined,
  recipeIngredient: undefined,
  recipeEquipment: undefined,
  recipePriceBreakdown: undefined,
  recipeNutrition: undefined,
  fromRandomRecipeAPI: undefined,
};

export const homeRecipeReducers = createReducer(
  initialState,
  on(HomeActions.storeRandomRecipe, (state, action) => {
    return {
      ...state,
      vegetarian: action.storedRandomRecipe.vegetarian,
      vegan: action.storedRandomRecipe.vegan,
      glutenFree: action.storedRandomRecipe.glutenFree,
      dairyFree: action.storedRandomRecipe.dairyFree,
      veryHealthy: action.storedRandomRecipe.veryHealthy,
      cheap: action.storedRandomRecipe.cheap,
      instructions: action.storedRandomRecipe.instructions,
      id: action.storedRandomRecipe.id,
      title: action.storedRandomRecipe.title,
      aggregateLikes: action.storedRandomRecipe.aggregateLikes,
      analyzedInstructions: action.storedRandomRecipe.analyzedInstructions,
      extendedIngredients: action.storedRandomRecipe.extendedIngredients,
    };
  }),
  on(HomeActions.loadRandomRecipesSuccess, (state, action) => {
    return {
      ...state,
      fromRandomRecipeAPI: action.randomRecipes
    };
  }),
  on(HomeActions.loadErrorAPI, (state, action) => {
    return {
      ...state,
      isLoadingAPI: false,

    };
  }),
  on(HomeActions.loadRandomRecipes, (state, action) => {
    return {
      ...state,
    };
  }),
  on(HomeActions.storeRandomTaste, (state, action) => {
    return {
      ...state,
      recipeTaste: action.tasteByID,
    };
  }),
  on(HomeActions.storeRandomIngredients, (state, action) => {
    return {
      ...state,
      recipeIngredient: action.ingredientsById,
    };
  }),
  on(HomeActions.storeRandomEquipment, (state, action) => {
    return {
      ...state,
      recipeEquipment: action.EquipmentById,
    };
  }),
  on(HomeActions.storeRandomPriceBrk, (state, action) => {
    return {
      ...state,
      recipePriceBreakdown: action.PriceBreakdownId,
    };
  }),
  on(HomeActions.storeRandomNutrition, (state, action) => {
    return {
      ...state,
      recipeNutrition: action.NutritionById,
    };
  })
);

export function reducer(state: StoredRandmRecipe | undefined, action: Action) {
  return homeRecipeReducers(state, action);
}
