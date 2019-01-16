import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { Role } from '../../models';
import { featureAdapter, State } from './state';

export const getError = (state: State): any => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;
export const selectRolesState:
  MemoizedSelector<object, State> = createFeatureSelector<State>('roles');

export const selectAllRolesItems: (state: object)
  => Role[] = featureAdapter.getSelectors(selectRolesState).selectAll;

export const selectRolesError: MemoizedSelector<object, any> = createSelector(
  selectRolesState,
  getError
);

export const selectRolesIsLoading:
  MemoizedSelector<object, boolean> = createSelector(selectRolesState, getIsLoading);
