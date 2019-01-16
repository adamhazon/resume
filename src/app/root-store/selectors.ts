import { createSelector, MemoizedSelector } from '@ngrx/store';
import { RolesStoreSelectors } from './roles-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  RolesStoreSelectors.selectRolesError,
  (rolesError: string) => {
    return rolesError;
  }
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  RolesStoreSelectors.selectRolesIsLoading,
  (roles: boolean) => {
    return roles;
  }
);
