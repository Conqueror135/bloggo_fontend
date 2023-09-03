import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManagementStateInterface } from '../types/managementState.interface';

export const managementFeatureSelector =
  createFeatureSelector<ManagementStateInterface>('managements');

export const isLoadingSelector = createSelector(
  managementFeatureSelector,
  (managementState: ManagementStateInterface) => managementState.isLoading
);

export const errorSelector = createSelector(
  managementFeatureSelector,
  (managementState: ManagementStateInterface) => managementState.error
);

export const listUserSelector = createSelector(
  managementFeatureSelector,
  (managementState: ManagementStateInterface) => managementState.dataListUser
);
export const listCatalogSelector = createSelector(
  managementFeatureSelector,
  (managementState: ManagementStateInterface) => managementState.dataListCatalog
);
