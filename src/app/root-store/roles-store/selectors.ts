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

export const selectRoleById = (id: number) =>
  createSelector(selectAllRolesItems, (allRoles: Role[]) => {
    if (allRoles) {
      return allRoles.find(role => role.id === id);
    } else {
      return null;
    }
  });

export const selectRolesError: MemoizedSelector<object, any> = createSelector(
  selectRolesState,
  getError
);

export const selectRolesIsLoading:
  MemoizedSelector<object, boolean> = createSelector(selectRolesState, getIsLoading);
