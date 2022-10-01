import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ExtendedIngredient,
  RandomRecipe,
} from 'src/app/interfaces/api/randomApi.interface';
import { CardIcons } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.css'],
})
export class CardDemoComponent implements  OnInit, OnChanges {
  @Input() randomRecipe!: RandomRecipe;
  // * UI
  public errorUi: boolean = false;
  public isLoading: boolean = true;
  public isDetails: boolean = false;


  // * bhv
  public newRandomMap!: any[];
  public groupedLikesIcos: CardIcons[] = [];
  public groupedLikes!: CardIcons;
  // * Card
  public title: string = '';
  public cookTime: number = 0;
  public credits: string = '';
  public creditsUrl: string = '';
  public id: number = 0;
  public image: string = '';
  public ingredients: ExtendedIngredient[] = [];
  public prepTime: number = 0;
  public readyInMinutes: number = 0;
  public susteinable: boolean = false;
  // * Card Icons
  public cheap: boolean = false;
  public glutenFree: boolean = false;
  public dairyFree: boolean = false;
  public vegan: boolean = false;
  public vegetarian: boolean = false;
  public veryHealthy: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if(!this.randomRecipe) {
      this.isLoading = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.mapChanges()
  }

  mapChanges() {
    this.image = this.randomRecipe.image;
    this.title = this.randomRecipe.title;
    this.cookTime = this.randomRecipe.cookingMinutes;
    this.readyInMinutes = this.randomRecipe.readyInMinutes;
    this.prepTime = this.randomRecipe.preparationMinutes;
    this.id = this.randomRecipe.id;
    this.packIcons();
    this.isLoading = false;
  }

  packIcons() {
    let groupedLikes = {
      cheap: this.randomRecipe.cheap,
      dairyFree: this.randomRecipe.dairyFree,
      vegan: this.randomRecipe.vegan,
      vegetarian: this.randomRecipe.vegetarian,
      gluttenFree: this.randomRecipe.glutenFree,
      veryHealthy: this.randomRecipe.veryHealthy,
    };
    this.groupedLikes = groupedLikes;
  }

  getRecipeDetails() {
    this.isDetails = true;
  }

  showDetails() {

  }
}
