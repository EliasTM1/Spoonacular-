import { createAction, props } from '@ngrx/store';
import { UserPrvt } from './form.reducer';

export enum FormActionsNames {
  Init = '[Form Page] Enter',
  UsrSubmit = '[Form Page] User data',
  UsrConfirm = '[Form Page] User confirmed',
  UsrIntolerances = '[Form Page] Intolerances confirmed',
  UsrLikes = '[Form Page] Like ing confirmed',
  UsrDislikes = '[Form Page] Dislike ing confirmed',
  classActive = '[Form Page] Class Active',
  formStepActive = '[Form Page] Next form step',
}

export const enter = createAction(FormActionsNames.Init);

export const submitPersonal = createAction(
  FormActionsNames.UsrSubmit,
  props<{ userInfo: UserPrvt }>()
);

export const confirmPersonal = createAction(
  FormActionsNames.UsrConfirm,
  props<{ confirmedAction: boolean }>()
);

export const addIntolerances = createAction(
  FormActionsNames.UsrIntolerances,
  props<{ intolerance: string }>()
);

export const intolerancesNumber = createAction(
  FormActionsNames.UsrLikes,
  props<{ index: number }>()
);

export const addDisLike = createAction(
  FormActionsNames.UsrDislikes,
  props<{ id: string }>()
);

export const changeFormStep = createAction(
  FormActionsNames.formStepActive,
  props<{ step: string }>()
);
