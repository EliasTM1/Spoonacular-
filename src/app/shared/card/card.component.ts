import { Component, Input, OnInit } from '@angular/core';
import {
  ExtendedIngredient,
  RandomRecipe,
} from 'src/app/interfaces/random.interface';
import { UserModel } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() responseRandom: any;
  @Input() cardUseCase: string = '';
  public randomRecipes!: RandomRecipe[];
  public newRandomMap!: any[];
  public errorUi: boolean = false;
  public isLoading: boolean = false;


  constructor() {}

  ngOnInit(): void {
    if (this.responseRandom) this.mapData(this.responseRandom);
  }

  mapData(response: any) {
    const rectas = response.recipes;
    const mappedRecipes = [];
    this.randomRecipes = rectas;

    let newRandomMap = this.randomRecipes.map((recipe) => {
      this.mapIngredients(recipe.extendedIngredients);
      return {
        id: recipe.id,
        title: recipe.title,
        susteinable: recipe.sustainable,
        vegetarian: recipe.vegetarian,
        vegan: recipe.vegan,
        glutenFree: recipe.glutenFree,
        dairyFree: recipe.dairyFree,
        veryHealthy: recipe.veryHealthy,
        cheap: recipe.cheap,
        prepTime: recipe.preparationMinutes,
        cookTime: recipe.cookingMinutes,
        credits: recipe.sourceName,
        creditsUrl: recipe.sourceUrl,
        image: recipe.image,
        readyInMinutes: recipe.readyInMinutes,
        ingredients: this.mapIngredients(recipe.extendedIngredients),

      };
    });
    this.newRandomMap = newRandomMap;
    console.warn(newRandomMap);
  }

  grupedLikes() {
    return [
      // {cheap: this.re}
    ]
  }

  // groupedLikes: this.groupLikesforIcons(
  //   recipe.cheap,
  //   recipe.dairyFree,
  //   recipe.glutenFree,
  //   recipe.vegan,
  //   recipe.vegetarian,
  //   recipe.veryHealthy
  // ),


  groupLikesforIcons(
    cheap: boolean,
    dairyFree: boolean,
    glutenFree: boolean,
    vegan: boolean,
    vegetarian: boolean,
    veryHealthy: boolean
  ) {
    let icons = [cheap, dairyFree, glutenFree, vegan, vegetarian, veryHealthy];
    console.warn(icons);

    return icons;
  }

  mapIngredients(ingredients: ExtendedIngredient[]) {
    const mappedIngredientArr: any = [];
    ingredients.forEach((ingredient) => {
      const mappedIngredient = {
        id: ingredient.id,
        amount: ingredient.amount,
        name: ingredient.name,
        unit: ingredient.unit,
        nameClean: ingredient.nameClean,
        original: ingredient.original,
        measures: {
          metric: ingredient.measures.metric,
          us: ingredient.measures.us,
        },
      };
      mappedIngredientArr.push(mappedIngredient);
    });
    return mappedIngredientArr;
  }
}
