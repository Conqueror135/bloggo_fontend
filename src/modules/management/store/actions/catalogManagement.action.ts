import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { GetListCatalogResponseInterface } from '@modules/management/types/getListCatalogResponse.interface';
import { CatalogInputInterface } from '@shared/types/catalogInput.interface';
import { CatalogInterface } from '@shared/types/catalog.interface';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';

export const getListCatalogAction = createAction(ActionTypes.GET_LIST_CATALOG);

export const getListCatalogSuccessAction = createAction(
  ActionTypes.GET_LIST_CATALOG_SUCCESS,
  props<{ listCatalog: GetListCatalogResponseInterface }>()
);

export const getListCatalogFailureAction = createAction(
  ActionTypes.GET_LIST_CATALOG_FAILURE
);

export const createCatalogAction = createAction(
  ActionTypes.CREATE_CATALOG,
  props<{ catalogInput: CatalogInputInterface }>()
);

export const createCatalogSuccessAction = createAction(
  ActionTypes.CREATE_CATALOG_SUCCESS,
  props<{ catalog: CatalogInterface }>()
);

export const createCatalogFailureAction = createAction(
  ActionTypes.CREATE_CATALOG_SUCCESS,
  props<{ errors: BackendErrorsInterface }>()
);

export const deleteCatalogAction = createAction(
  ActionTypes.DELETE_CATALOG,
  props<{ _id: string }>()
);
export const deleteCatalogSuccessAction = createAction(
  ActionTypes.DELETE_CATALOG_SUCCESS
);

export const deleteCatalogFailureAction = createAction(
  ActionTypes.DELETE_CATALOG_FAILURE
);
