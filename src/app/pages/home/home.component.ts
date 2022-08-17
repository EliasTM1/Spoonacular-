import { Component, OnInit } from '@angular/core';
import { RandomRecipe } from 'src/app/interfaces/random.interface';
import { SpoonacularServiceMock } from 'src/app/services/spoonacular.mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private spoonMockApi: SpoonacularServiceMock) {}

  // public randomRecipes: RandomRecipe[] | undefined;
  public randomRecipes: any | undefined;
  public isLoading: boolean = false;

  ngOnInit(): void {
    this.getRandomRecipes();
  }

  getRandomRecipes() {
    let random = this.spoonMockApi.requestRandom().subscribe(
      (randomRecipes) => {
        console.log(typeof randomRecipes);
        this.randomRecipes = randomRecipes;
      },
      (error) => {
        console.log(error);
      }
    );

    return random;
  }
}
