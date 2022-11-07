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
import { Store } from '@ngrx/store';
import { HomeSelectors, HomeActions } from '../../pages/home/state/index'
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, map } from 'rxjs/operators';
import { StoredRandmRecipe } from '../../pages/home/state/home.reducer';
@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.css'],
})
export class CardDemoComponent implements  OnInit, OnChanges {
  @Input() randomRecipe!: RandomRecipe;
  // * UI
  public errorUi: boolean = false;
  public isLoading: boolean = false;
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
  public summary : string = '';
  public susteinable: boolean = false;
  // * Card Icons
  public cheap: boolean = false;
  public glutenFree: boolean = false;
  public dairyFree: boolean = false;
  public vegan: boolean = false;
  public vegetarian: boolean = false;
  public veryHealthy: boolean = false;
  // * Store
  public storedRecipe!: StoredRandmRecipe

  constructor(
    private store : Store
  ) {}

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
    this.summary = this.randomRecipe.summary
    this.packIcons();
    this.storeRandomRecipe();
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

  storeRandomRecipe() {
    //  * Synch
    // this.store.dispatch(HomeActions.storeRandomRecipe({
    //   storedRandomRecipe : this.buildStoredRecipe()
    // }))
  }

  buildStoredRecipe() : StoredRandmRecipe {
    return {
      vegetarian : this.randomRecipe.vegetarian,
      vegan : this.randomRecipe.vegan,
      glutenFree : this.randomRecipe.glutenFree,
      dairyFree : this.randomRecipe.dairyFree,
      veryHealthy : this.randomRecipe.veryHealthy,
      cheap : this.randomRecipe.cheap,
      instructions : this.randomRecipe.instructions,
      id : this.randomRecipe.id,
      title : this.randomRecipe.title,
      aggregateLikes : this.randomRecipe.aggregateLikes,
      analyzedInstructions : this.randomRecipe.analyzedInstructions,
      extendedIngredients : this.randomRecipe.extendedIngredients,
      image: this.randomRecipe.image,
      summary: this.randomRecipe.summary,
      isLoadingAPI : false,
      errorAPI : false,
      fromRandomRecipeAPI: undefined,
    }
  }

  closeModal() {
    this.isDetails = false;
  }
}
