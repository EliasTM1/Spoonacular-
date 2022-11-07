import { createAction, props } from '@ngrx/store';
import { UserPrvt } from './form.reducer';

export enum FormActionNames {
  Init = '[Form Page] Enter',
  UsrSubmit = '[Form Page] User data',
  UsrConfirm = '[Form Page] User confirmed',
  UsrIntolerances = '[Form Page] Intolerances confirmed',
  UsrLikes = '[Form Page] Like ing confirmed',
  UsrDislikes = '[Form Page] Dislike ing confirmed',
  classActive = '[Form Page] Class Active',
  formStepActive = '[Form Page] Next form step',
}

export const enter = createAction(FormActionNames.Init);

export const submitPersonal = createAction(
  FormActionNames.UsrSubmit,
  props<{ userInfo: UserPrvt }>()
);

export const confirmPersonal = createAction(
  FormActionNames.UsrConfirm,
  props<{ confirmedAction: boolean }>()
);

export const addIntolerances = createAction(
  FormActionNames.UsrIntolerances,
  props<{ intolerance: string }>()
);

export const intolerancesNumber = createAction(
  FormActionNames.UsrLikes,
  props<{ index: number }>()
);

export const addDisLike = createAction(
  FormActionNames.UsrDislikes,
  props<{ id: string }>()
);

export const changeFormStep = createAction(
  FormActionNames.formStepActive,
  props<{ step: string }>()
);
