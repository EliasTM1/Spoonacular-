import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SEARCH_TYPE, API_KEY, MAIN_URL } from './http.constants';
import {
  RandomRecipe,
  SingleRandomRecipe,
} from '../interfaces/api/randomApi.interface';
import {
  NutritionById,
  EquipmentById,
  TasteById,
  PriceBreakdownId,
  IngredientsById,
} from '../interfaces/api/widgets.interface';
@Injectable({
  providedIn: 'root',
})
export class SpoonacularService {
  test!: Observable<RandomRecipe>;

  constructor(private http: HttpClient) {}

  getRandom() {
    return this.http.get<SingleRandomRecipe>(
      `${MAIN_URL}${SEARCH_TYPE.RANDOM}?${API_KEY}`
    );
  }

  getRecipeNutrition(ID: string | null) {
    return this.http.get<NutritionById>(
      `${MAIN_URL}${ID}/${SEARCH_TYPE.WIDGETS.NUTRITION}?${API_KEY}`
    );
  }

  getRecipeEquipment(ID: string | null) {
    return this.http.get<EquipmentById>(
      `${MAIN_URL}${ID}/${SEARCH_TYPE.WIDGETS.EQUIPMENT}?${API_KEY}`
    );
  }

  getPriceBreakdown(ID: string | null) {
    return this.http.get<PriceBreakdownId>(
      `${MAIN_URL}${ID}/${SEARCH_TYPE.WIDGETS.PRICEBREAKDOWN}?${API_KEY}`
    );
  }

  getRecipesIngredients(ID: string | null) {
    return this.http.get<IngredientsById>(
      `${MAIN_URL}${ID}/${SEARCH_TYPE.WIDGETS.INGREDIENTS}?${API_KEY}`
    );
  }

  getRecipesTaste(ID: string | null) {
    return this.http.get<TasteById>(
      `${MAIN_URL}${ID}/${SEARCH_TYPE.WIDGETS.TASTE}?${API_KEY}`
    );
  }
}
