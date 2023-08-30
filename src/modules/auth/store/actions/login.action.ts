import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { LoginRequestInterface } from '@modules/auth/types/login-request.interface';
import { UserInfoInterface } from '@shared/types/userInfo.interface';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ userInfo: UserInfoInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
