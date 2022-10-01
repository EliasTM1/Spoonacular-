import { createFeatureSelector, createSelector } from "@ngrx/store";
import {formStateKey, UserPrvt} from './form.reducer'

const usrState = createFeatureSelector<UserPrvt>(formStateKey)

export const name = createSelector(
  usrState,
  (usrState) => usrState.name
);

export const age = createSelector(
  usrState,
  (usrState) => usrState.age
);

export const height = createSelector(
  usrState,
  (usrState) => usrState.height
);

export const weight = createSelector(
  usrState,
  (usrState) => usrState.weight
);

export const heightU = createSelector(
  usrState,
  (usrState) => usrState.heightU
);

export const weightUnits = createSelector(
  usrState,
  (usrState) => usrState.weightUnits
);

export const intolerances = createSelector(
  usrState,
  (usrState) => usrState.usrIntolerances
);

export const currentStep = createSelector(
  usrState,
  (usrState) => usrState.completeEnrollSteps
);

// ? Create complex calculations and/or recycle
// * ----------------------------------------------------------------------------
// * To return a complex calculation from the selectors created above
// * we can create a new selector passing as much as selectros created we want
// * in the projection function we pass them in order to create a new calculation
// export const calculateBmiMetric = createSelector(
//   height,
//   excample1,
//   excample2,
//   (usrState, example, example2 ) => here we return the new calculation
// );
// * ----------------------------------------------------------------------------

