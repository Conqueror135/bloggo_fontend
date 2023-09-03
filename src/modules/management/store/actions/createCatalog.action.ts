import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { CatalogInputInterface } from '@shared/types/catalogInput.interface';

export const createCatalogAction = createAction(
  ActionTypes.CREATE_CATALOG,
  props<{ catalog: CatalogInputInterface }>()
);
