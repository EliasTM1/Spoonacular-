import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SpoonacularService } from "src/app/services/spoonacular.service";
import { map, catchError, mergeMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import { HomeActionNames } from "./home.actions";
// import * as HomeActions  from './home.actions'

@Injectable()
export class HomeEffects {

  constructor(
    private actions$ : Actions,
    private spoonService : SpoonacularService
  ) {
  }
  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActionNames.loadRandomRecipes),
      mergeMap(() => this.spoonService.getRandom()
        .pipe(
          // map(randomRecipes => ({type: '[Home Page] API Loading', payload: randomRecipes})),
          map(randomRecipes => ({type: HomeActionNames.loadRandomRecipesSuccess, payload: randomRecipes.recipes[0]}
            )),
          // catchError(() => of({type: HomeActionNames.loadErrorAPI}))
          catchError(() => of({ type: HomeActionNames.loadErrorAPI }))
        )
      )
    )
  )
}
