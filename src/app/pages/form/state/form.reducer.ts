import { createReducer, on } from '@ngrx/store';
import { FormStepActions } from './index';

export const formStateKey = 'userState';

export interface UserPrvt {
  age: number;
  height: number;
  heightU: string;
  name: string;
  enrollStarted: boolean;
  weight: number;
  weightUnits: string;
}

export interface UserIntolerances {
  dairy: boolean;
  egg: boolean;
  gluten: boolean;
  grain: boolean;
  peanut: boolean;
  seafood: boolean;
  sesame: boolean;
  shellfish: boolean;
  soy: boolean;
  sulfite: boolean;
  treeNut: boolean;
  wheat: boolean;
}

export const initialState: UserPrvt = {
  age: 0,
  height: 0,
  heightU: '',
  name: '',
  enrollStarted: false,
  weight: 0,
  weightUnits: '',
};

export const intialStateIntolerances: UserIntolerances = {
  dairy: false,
  egg: false,
  gluten: false,
  grain: false,
  peanut: false,
  seafood: false,
  sesame: false,
  shellfish: false,
  soy: false,
  sulfite: false,
  treeNut: false,
  wheat: false,
};

export const reducer = createReducer(
  initialState,
  on(FormStepActions.enter, FormStepActions.actionExample, (state) => {
    return {
      ...state,
    };
  }),
  on(FormStepActions.submitPersonal, (state, action) => {
    return {
      ...state,
      name: action.userInfo.name,
      age: action.userInfo.age,
      height: action.userInfo.height,
      heightU: action.userInfo.heightU,
      startedEnroll: true,
      weight: action.userInfo.weight,
      weightUnits: action.userInfo.weightUnits,
    };
  }),

);

export const intoleanceReducer = createReducer(
  intialStateIntolerances,

)


// * Selectors
// export const selectUsrName = (state: UserPrvt) => state.name;
// export const selectUsrAge = (state: UserPrvt) => state.age;
// export const selectUsrHeight = (state: UserPrvt) => state.height;
// export const selectUsrHeightU = (state: UserPrvt) => state.heightU;
// export const selectUsrWeight = (state: UserPrvt) => state.weight;
// export const selectUsrWeightUnits = (state: UserPrvt) => state.weightUnits;
