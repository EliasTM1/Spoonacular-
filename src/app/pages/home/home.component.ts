import { Component, OnInit } from '@angular/core';
import {
  RandomRecipe,
} from 'src/app/interfaces/api/randomApi.interface';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import { SpoonacularServiceMock } from 'src/app/services/spoonacular.mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private spoonApi: SpoonacularService,
    private spoonMockApi: SpoonacularServiceMock
  ) {}

  public isLoading: boolean = true;
  public randomRecipes!: RandomRecipe;
  public recipes: any;

  ngOnInit(): void {
    this.getRecipes();
  }

    getRecipes() {
    // * Real endpoint
    // this.spoonApi
    //   .getRandom()
    //   .subscribe((randomRecipes: SingleRandomRecipe) => {
    //     this.recipes = randomRecipes.recipes[0];
    //     this.randomRecipes = this.recipes
    //     this.isLoading = false;
    //     console.log(this.recipes, "home component")
    //   });
    // * Real endpoint

    let random = this.spoonMockApi.requestRandom().subscribe(
      (randomRecipes) => {
        this.recipes = randomRecipes.recipes;
        this.randomRecipes = this.recipes[0];
      },
      (error) => {
      }
    );
    return random;
  }
}
