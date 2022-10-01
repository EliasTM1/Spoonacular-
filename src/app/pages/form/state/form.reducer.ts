import { Action, createReducer, on } from '@ngrx/store';
import { FormStepActions } from './index';

export const formStateKey = 'userState';

export interface UserPrvt {
  age: number;
  personalConfimerd: boolean;
  height: number;
  heightU: string;
  name: string;
  enrollStarted: boolean;
  enrollFinished: boolean;
  weight: number;
  weightUnits: string;
  usrIntolerances: string[];
  completeEnrollSteps: string;
}

export const initialState: UserPrvt = {
  age: 0,
  personalConfimerd: false,
  height: 0,
  heightU: '',
  name: '',
  enrollStarted: false,
  enrollFinished: false,
  weight: 0,
  weightUnits: '',
  usrIntolerances: [],
  completeEnrollSteps: '',
};

export const userReducer = createReducer(
  initialState,
  on(FormStepActions.enter, (state) => {
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
      enrollStarted: !action.userInfo.enrollStarted,
      weight: action.userInfo.weight,
      weightUnits: action.userInfo.weightUnits,
    };
  }),
  on(FormStepActions.confirmPersonal, (state, action) => {
    return {
      ...state,
      personalConfimerd: action.confirmedAction,
    };
  }),
  on(FormStepActions.addIntolerances, (state, action) => {
    let intolerances = [...state.usrIntolerances];
    let newIntoleranceState = intolerances.includes(action.intolerance)
      ? [...state.usrIntolerances].filter((e) => e != action.intolerance)
      : [...state.usrIntolerances, action.intolerance];
    return {
      ...state,
      usrIntolerances: newIntoleranceState,
    };
  }),
  on(FormStepActions.changeFormStep, (state, action) => {
    return {
      ...state,
      completeEnrollSteps: action.step,
    };
  })
);

export function reducer(state: UserPrvt | undefined, action: Action) {
  return userReducer(state, action);
}
