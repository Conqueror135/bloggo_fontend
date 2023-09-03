import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { GetListCatalogResponseInterface } from '@modules/management/types/getListCatalogResponse.interface';

export const getListCatalogAction = createAction(ActionTypes.GET_LIST_CATALOG);

export const getListCatalogSuccessAction = createAction(
  ActionTypes.GET_LIST_CATALOG_SUCCESS,
  props<{ listCatalog: GetListCatalogResponseInterface }>()
);

export const getListCatalogFailureAction = createAction(
  ActionTypes.GET_LIST_CATALOG_FAILURE
);
