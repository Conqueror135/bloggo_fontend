import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CreateArticleStateInterface } from '../types/createArticleState.interface';

export const articleFeatureSelector =
  createFeatureSelector<CreateArticleStateInterface>('article');
export const isSubmittingSelector = createSelector(
  articleFeatureSelector,
  (articleState: CreateArticleStateInterface) => articleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  articleFeatureSelector,
  (articleState: CreateArticleStateInterface) => articleState.validationErrors
);

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: CreateArticleStateInterface) => articleState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: CreateArticleStateInterface) => articleState.error
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: CreateArticleStateInterface) => articleState.data
);
