import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { GetListUserResponseInterface } from '@modules/management/types/getListUserResponse.interface';

export const getListUserAction = createAction(ActionTypes.GET_LIST_USER);

export const getListUserSuccessAction = createAction(
  ActionTypes.GET_LIST_USER_SUCCESS,
  props<{ listUser: GetListUserResponseInterface }>()
);

export const getListUserFailureAction = createAction(
  ActionTypes.GET_LIST_USER_FAILURE
);
