import {ActionReducerMap} from '@ngrx/store';
import * as userReducer from './pages/form/state/form.reducer';
import * as homeReducer from './pages/home/state/home.reducer'
export interface AppState {
  user: userReducer.UserPrvt,
  home: homeReducer.StoredRandmRecipe
}

export const appReducers: ActionReducerMap<AppState> = {
  user: userReducer.reducer,
  home: homeReducer.reducer
}
