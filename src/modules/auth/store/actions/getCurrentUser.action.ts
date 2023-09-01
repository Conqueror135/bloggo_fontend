import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { UserInfoInterface } from '@shared/types/userInfo.interface';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ userInfo: UserInfoInterface }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
);
