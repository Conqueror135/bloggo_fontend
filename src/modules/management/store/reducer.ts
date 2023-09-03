import { createReducer, on, Action } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  getListUserAction,
  getListUserFailureAction,
  getListUserSuccessAction,
} from './actions/getListUser.action';
import { ManagementStateInterface } from '../types/managementState.interface';
import {
  getListCatalogAction,
  getListCatalogFailureAction,
  getListCatalogSuccessAction,
} from './actions/getListCatalog.action';
import {
  getListArticleAction,
  getListArticleFailureAction,
  getListArticleSuccessAction,
} from './actions/getListArticle.action';

const initialState: ManagementStateInterface = {
  dataListUser: null,
  dataListCatalog: null,
  dataListArticle: null,
  isLoading: false,
  error: null,
};

const managementReducer = createReducer(
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
  on(
    getListCatalogAction,
    (state): ManagementStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(getListCatalogSuccessAction, (state, action): ManagementStateInterface => {
    return {
      ...state,
      isLoading: false,
      dataListCatalog: action.listCatalog,
    };
  }),
  on(
    getListCatalogFailureAction,
    (state): ManagementStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    getListArticleAction,
    (state): ManagementStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(getListArticleSuccessAction, (state, action): ManagementStateInterface => {
    return {
      ...state,
      isLoading: false,
      dataListArticle: action.listArticle,
    };
  }),
  on(
    getListArticleFailureAction,
    (state): ManagementStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ManagementStateInterface => initialState)
);

export function reducers(state: ManagementStateInterface, action: Action) {
  return managementReducer(state, action);
}
