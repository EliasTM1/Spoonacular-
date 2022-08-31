import { Component, Input, OnInit } from '@angular/core';
import {
  ExtendedIngredient,
  newRandomRecipe,
  RandomRecipe,
} from 'src/app/interfaces/api/random.interface';
import { CardIcons, UserModel } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.css'],
})
export class CardDemoComponent implements OnInit {
  @Input() recipes: any;
  @Input() cardUseCase: string = '';
  @Input() randomRecipe!: newRandomRecipe;
  // * UI
  public errorUi: boolean = false;
  public isLoading: boolean = false;
  public isDetails: boolean = false;
  // public inDevTest!: CardIcons;
  // * bhv
  public newRandomMap!: any[];
  public groupedLikesIcos: CardIcons[] = [];
  public randomRecipes!: RandomRecipe[];
  public groupedLikes: any;
  // * Card
  public cheap: boolean = false;
  public cookTime: number = 0;
  public credits: string = '';
  public creditsUrl: string = '';
  public dairyFree: boolean = false;
  public glutenFree: boolean = false;
  public id: string = '';
  public image: string = '';
  public ingredients: string = '';
  public prepTime: number = 0;
  public readyInMinutes: number = 0;
  public susteinable: boolean = false;
  public title: string = '';
  public vegan: boolean = false;
  public vegetarian: boolean = false;
  public veryHealthy: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.mapData();
  }

  mapData() {
    this.cheap = this.randomRecipe.cheap;
    this.cookTime = this.randomRecipe.cookTime;
    this.credits = this.randomRecipe.credits;
    this.creditsUrl = this.randomRecipe.creditsUrl;
    this.dairyFree = this.randomRecipe.dairyFree;
    this.glutenFree = this.randomRecipe.glutenFree;
    this.id = this.randomRecipe.id;
    this.image = this.randomRecipe.image;
    this.ingredients = this.randomRecipe.ingredients;
    this.prepTime = this.randomRecipe.prepTime;
    this.readyInMinutes = this.randomRecipe.readyInMinutes;
    this.susteinable = this.randomRecipe.susteinable;
    this.title = this.randomRecipe.title;
    this.vegan = this.randomRecipe.vegan;
    this.vegetarian = this.randomRecipe.vegetarian;
    this.veryHealthy = this.randomRecipe.veryHealthy;
    this.packIcons();
  }

  packIcons() {
    const groupedLikes = {
      cheap: this.cheap,
      dairyFree: this.dairyFree,
      vegan: this.vegan,
      vegetarian: this.vegetarian,
      glutenFree: this.glutenFree,
      veryHealthy: this.veryHealthy,
    };
    this.groupedLikes = groupedLikes;
  }

  getRecipeDetails() {
    console.warn('Getting Details');
    this.isDetails = true;
  }
}
