import { Component, OnInit } from '@angular/core';
import { ExtendedIngredient, newRandomRecipe, RadomRecipes, RandomRecipe } from 'src/app/interfaces/api/random.interface';
import { SpoonacularServiceMock } from 'src/app/services/spoonacular.mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private spoonMockApi: SpoonacularServiceMock) {}

  // public randomRecipes: RandomRecipe[] | undefined;
  public recipes: any[] = [];
  public isLoading: boolean = false;
  public randomRecipes : newRandomRecipe[] = []

  ngOnInit(): void {
    this.getRecipes();
    console.warn(this.recipes);
  }

  getRecipes() {
    let random = this.spoonMockApi.requestRandom().subscribe(
      (randomRecipes) => {
        console.log({ randomRecipes});
        this.recipes = randomRecipes.recipes;
        console.log( this.recipes);
      },
      (error) => {
        console.log(error);
      }
    );
    this.createRandomRecipe();
    return random;
  }

  createRandomRecipe() {

    const mappedRandomRecipe = this.recipes.map((recipe:any)  => {
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
      }
    })
    console.warn(mappedRandomRecipe);

    this.randomRecipes = mappedRandomRecipe;

  }

  mapIngredients(ingredients: ExtendedIngredient[]) {
    console.log('exec');

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
