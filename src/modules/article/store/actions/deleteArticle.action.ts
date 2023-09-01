import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionsTypes';

export const deleteArticleAction = createAction(
  ActionTypes.DELETE_ARTICLE,
  props<{ _id: string }>()
);

export const deleteArticleSuccessAction = createAction(
  ActionTypes.DELETE_ARTICLE_SUCCESS
);

export const deleteArticleFailureAction = createAction(
  ActionTypes.DELETE_ARTICLE_FAILURE
);
