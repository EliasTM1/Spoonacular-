import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { NutritionById } from 'src/app/interfaces/api/widgets.interface';
import { NutritionById, EquipmentById, IngredientsById, PriceBreakdownId, TasteById } from '../../interfaces/api/widgets.interface';
import { SpoonacularServiceMock } from 'src/app/services/spoonacular.mock.service';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import {AvFormDisplayMode} from './constants'


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  public id!: string | null;
  public formDisplayMode : string = '';
  public nutrition!: NutritionById;
  public equipment!: EquipmentById;
  public ingredients!: IngredientsById;
  public priceBreakdown!: PriceBreakdownId;
  public taste!: TasteById;
  public generalDetails : string = AvFormDisplayMode.generalDetails
  public priceBreakdownGraph : string = AvFormDisplayMode.priceBreakdownGraph
  public nutritionInfoGraph : string = AvFormDisplayMode.nutritionInfoGraph
  constructor(
    private route: ActivatedRoute,
    private spoonApi: SpoonacularService,
    private spoonMockApi: SpoonacularServiceMock
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('recipeId');
    this.getRecipesTaste();
    this.getRecipesIngredients();
    this.getRecipesPriceBreakdown();
    this.getRecipesEquipment();
    this.getRecipesNutrition();
  }

  getRecipesTaste() {
    // this.spoonApi.getRecipesTaste(this.id).subscribe(e => {
    //   console.log(e, 'getRecipesTaste');
    // });

    this.spoonMockApi.requestRecipeTaste().subscribe(e => {
      console.log("from Mocks RecipeTaste", e);
    })
  }

  getRecipesIngredients() {
    // this.spoonApi.getRecipesIngredients(this.id).subscribe(e => {
    //   console.log(e, 'getRecipesIngredients');
    // });

    this.spoonMockApi.requestRecipeIngredients().subscribe(e => {
      console.log("from Mocks ingredients", e);
    })

  }

  getRecipesPriceBreakdown() {
    // this.spoonApi.getPriceBreakdown(this.id).subscribe(e => {
    //   console.log(e, 'getRecipesPriceBreakdown');
    // });

    this.spoonMockApi.requestPriceBreakdown().subscribe(e => {
      console.log("from mocks price breakdown", e);
    })
  }

  getRecipesEquipment() {
    // this.spoonApi.getRecipeEquipment(this.id).subscribe(e => {
    //   console.log(e, 'getRecipesEquipment');
    // });

    this.spoonMockApi.requestRecipeEquipment().subscribe(e => {
      console.log("from mocks recipe equipment", e);
    })
  }

  getRecipesNutrition() {
    // this.spoonApi.getRecipeNutrition(this.id).subscribe(e => {
    //   console.log(e, 'getRecipesNutrition');
    // });

    this.spoonMockApi.requestRecipeNutrition().subscribe(e => {
      console.log("from mock nutrition")
    })
  }

  setNutritionalForm() {
    this.formDisplayMode = this.generalDetails;
    console.warn("setNutritionalForm");
  }

  setPriceBreakdownForm() {
    this.formDisplayMode = this.priceBreakdownGraph;
    console.warn("setPriceBreakdownForm");

  }

  setGenDetailForm() {
    this.formDisplayMode = this.nutritionInfoGraph;
    console.warn("setGenDetailForm");
  }

  closeModal() {}
}
