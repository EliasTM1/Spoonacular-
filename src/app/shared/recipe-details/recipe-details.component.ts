import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { NutritionById } from 'src/app/interfaces/api/widgets.interface';
import {
  NutritionById,
  EquipmentById,
  IngredientsById,
  PriceBreakdownId,
  TasteById,
} from '../../interfaces/api/widgets.interface';
import { SpoonacularServiceMock } from 'src/app/services/spoonacular.mock.service';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import { AvFormDisplayMode } from './constants';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { HomeSelectors } from 'src/app/pages/home/state';
import { ExtendedIngredient } from 'src/app/interfaces/api/randomApi.interface';
import { HomeActionNames } from '../../pages/home/state/home.actions';
import { HomeActions } from '../../pages/home/state/index';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  @Output() closeDetailsModals = new EventEmitter<boolean>();
  @Input() image!: string;
  @Input() summary!: string;

  public dataTaste$: any;
  public id!: string | null;
  public formDisplayMode: string = '';
  public nutrition!: NutritionById;
  public equipment!: EquipmentById;
  public ingredients!: IngredientsById;
  public priceBreakdown!: PriceBreakdownId;
  public taste!: TasteById;
  public generalDetails: string = AvFormDisplayMode.generalDetails;
  public priceBreakdownGraph: string = AvFormDisplayMode.priceBreakdownGraph;
  public nutritionInfoGraph: string = AvFormDisplayMode.nutritionInfoGraph;

  // * With selectors
  public readonly title$: Observable<string> = this.store.select(
    HomeSelectors.title
  );
  public readonly image$: Observable<string> = this.store.select(
    HomeSelectors.image
  );
  public readonly summary$: Observable<string> = this.store.select(
    HomeSelectors.summary
  );
  public readonly ingredients$: Observable<ExtendedIngredient[]> =
    this.store.select(HomeSelectors.ingredients);

  // * Widgets selectors
  recitron : any
  public readonly recipeTaste$: Observable<TasteById | undefined> =
    this.store.select(HomeSelectors.recipeTaste);

  constructor(
    private route: ActivatedRoute,
    private spoonApi: SpoonacularService,
    private spoonMockApi: SpoonacularServiceMock,
    private store: Store
  ) {}

  unpackIngredients() {
    let myIngredients = this.ingredients$
    console.log(myIngredients.forEach(e => {
      console.log(e)
    }))
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('recipeId');
    this.setNutritionalForm();
    this.getRecipesTaste();
    this.getRecipesIngredients();
    this.getRecipesPriceBreakdown();
    this.getRecipesEquipment();
    this.getRecipesNutrition();
    setTimeout(() => {
      this.unpackIngredients()
        this.dataTaste$ = this.ingredients$.pipe(
        map(([recipe]) => ({
          recipe : recipe
        }))
      )

      console.log(this.dataTaste$, "from recipe details")
      console.log(this.dataTaste$, "from recipe details")

    }, 3000);
  }

  //  * Widget taste
  getRecipesTaste() {
    // * Real endpoint
    // this.spoonApi.getRecipesTaste(this.id).subscribe(e => {
    //   console.log(e, 'getRecipesTaste');
    // });
    // * Mock API
    this.spoonMockApi.requestRecipeTaste().subscribe((recipeTasteBreakdown) => {
      this.store.dispatch(
        HomeActions.storeRandomTaste({
          tasteByID: recipeTasteBreakdown,
        })
      );
    });
  }

  //  * Widget ingredients
  getRecipesIngredients() {
    //  * Real endpoint
    // this.spoonApi.getRecipesIngredients(this.id).subscribe(e => {
    //   console.log(e, 'getRecipesIngredients');
    // });
    // * Mock
    this.spoonMockApi
      .requestRecipeIngredients()
      .subscribe((recipeIngredients) => {
        this.store.dispatch(
          HomeActions.storeRandomIngredients({
            ingredientsById: recipeIngredients,
          })
        );
      });

    this.store.select(HomeSelectors.image);
  }

  // * Widget price breakdown
  getRecipesPriceBreakdown() {
    // * Real endpoint
    // this.spoonApi.getPriceBreakdown(this.id).subscribe(e => {
    //   console.log(e, 'getRecipesPriceBreakdown');
    // });
    // * Mock
    this.spoonMockApi
      .requestPriceBreakdown()
      .subscribe((recipePriceBreakdown) => {
        this.store.dispatch(
          HomeActions.storeRandomPriceBrk({
            PriceBreakdownId: recipePriceBreakdown,
          })
        );
      });
  }

  // * Widget equipment
  getRecipesEquipment() {
    //  * Real endpoint
    // this.spoonApi.getRecipeEquipment(this.id).subscribe(e => {
    //   console.log(e, 'getRecipesEquipment');
    // });
    // * Mock
    this.spoonMockApi.requestRecipeEquipment().subscribe((RecipeEquipment) => {
      this.store.dispatch(
        HomeActions.storeRandomEquipment({
          EquipmentById: RecipeEquipment,
        })
      );
    });
  }

  // * Widget recipe
  getRecipesNutrition() {
    // * Real endpoint
    // this.spoonApi.getRecipeNutrition(this.id).subscribe(e => {
    //   console.log(e, 'getRecipesNutrition');
    // });
    // * Mock
    this.spoonMockApi
      .requestRecipeNutrition()
      .subscribe((recipeNutritionBreakdown) => {
        this.store.dispatch(
          HomeActions.storeRandomNutrition({
            NutritionById: recipeNutritionBreakdown,
          })
        );
      });
  }

  setNutritionalForm() {
    this.formDisplayMode = this.generalDetails;
    console.warn('setNutritionalForm');
  }

  setPriceBreakdownForm() {
    this.formDisplayMode = this.priceBreakdownGraph;
    console.warn('setPriceBreakdownForm');
  }

  setGenDetailForm() {
    this.formDisplayMode = this.nutritionInfoGraph;
    console.warn('setGenDetailForm');
  }

  closeModal() {
    this.closeDetailsModals.emit(true);
    console.log('emited');
  }
}
