import { createAction, props } from "@ngrx/store";

import {Ingredient} from "../../../interfaces/recipes.interfaces";

export const init = createAction('[From Page] Init');

export const addLikes = createAction(
  '[Form Page] Add like ingredient',
  props<{like : Ingredient}>()
  );
export const disLikes = createAction(
  '[Form Page] Add dislike ingredient',
  props<{dislike : Ingredient}>()
  );

  export const clearCompleted = createAction('[Form Page] I think im done')

