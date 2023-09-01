import { createReducer, on, Action } from '@ngrx/store';
import {
  createArticleAction,
  createArticleSuccessAction,
  createArticleFailureAction,
} from './actions/createArticle.action';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.action';
import { ArticleStateInterface } from '../types/articleState.interface';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from './actions/updateArticle.action';

const initialState: ArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  data: null,
  isLoading: false,
  error: null,
};

const articleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),

  on(
    createArticleSuccessAction,
    (state): ArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),

  on(
    createArticleFailureAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    updateArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateArticleSuccessAction,
    (state): ArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
);

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}
