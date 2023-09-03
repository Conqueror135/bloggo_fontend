import { createReducer, on, Action } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  getListUserAction,
  getListUserFailureAction,
  getListUserSuccessAction,
} from './actions/getListUser.action';
import { ManagementStateInterface } from '../types/managementState.interface';

const initialState: ManagementStateInterface = {
  dataListUser: null,
  isLoading: false,
  error: null,
};

const listUserReducer = createReducer(
  initialState,
  on(
    getListUserAction,
    (state): ManagementStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(getListUserSuccessAction, (state, action): ManagementStateInterface => {
    return {
      ...state,
      isLoading: false,
      dataListUser: action.listUser,
    };
  }),
  on(
    getListUserFailureAction,
    (state): ManagementStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ManagementStateInterface => initialState)
);

export function reducers(state: ManagementStateInterface, action: Action) {
  return listUserReducer(state, action);
}
