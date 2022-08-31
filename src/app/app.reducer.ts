import {ActionReducerMap} from '@ngrx/store';

import * as userReducer from './pages/form/state/form.reducer';

export interface AppState {
  user: userReducer.UserPrvt
}

export const appReducers: ActionReducerMap<AppState> = {
  user: userReducer.reducer
}
