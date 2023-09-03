import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { GetListArticleResponseInterface } from '@modules/management/types/getListArticleResponse.interface';

export const getListArticleAction = createAction(ActionTypes.GET_LIST_ARTICLE);

export const getListArticleSuccessAction = createAction(
  ActionTypes.GET_LIST_ARTICLE_SUCCESS,
  props<{ listArticle: GetListArticleResponseInterface }>()
);

export const getListArticleFailureAction = createAction(
  ActionTypes.GET_LIST_ARTICLE_FAILURE
);
