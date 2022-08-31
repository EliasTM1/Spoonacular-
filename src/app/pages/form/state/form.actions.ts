import { createAction, props } from "@ngrx/store";
import { UserPrvt } from "./form.reducer";


export const enter = createAction('[Form Page] Enter');
export const actionExample = createAction('[Form Page] Example to showcase multiple actions for one reducer');


export const submitPersonal = createAction(
  '[Form Page] User data',
  props<{userInfo : UserPrvt}>()
  );

export const confirmPersonal = createAction(
  '[Form Page] User confirmed',
  props<{id : string}>()
  );

export const addIntolerances = createAction(
  '[Form Page] Intolerances confirmed',
  props<{id : string}>()
  );

export const addLikes = createAction(
  '[Form Page] Like ing confirmed',
  props<{id : string}>()
  );

export const addDisLike = createAction(
  '[Form Page] Dislike ing confirmed',
  props<{id : string}>()
  );
