import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import { SpoonacularServiceMock } from 'src/app/services/spoonacular.mock.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(
    private spoonMockApi: SpoonacularServiceMock,
    private spoonApi: SpoonacularService,
  ) { }

  isLoading : boolean = false;
  recipes : any[] = [];

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    // * Real
//  this.spoonApi
//       .getRandom()
//       .subscribe((randomRecipes: any) => {
//         this.recipes = randomRecipes.recipes[0];
//         this.isLoading = false;
//         console.log(this.recipes, "Grid component")
//       });
    // * Mock
    // let random = this.spoonMockApi.requestRandom().subscribe(
    //   (randomRecipes) => {
    //     console.log(randomRecipes)
    //     this.recipes = randomRecipes.recipes;
    //   },
    //   (error) => {
    //   }
    // );
  }



}
