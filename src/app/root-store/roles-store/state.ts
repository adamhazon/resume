import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Role } from '../../models';

export const featureAdapter:
  EntityAdapter<Role> = createEntityAdapter<Role>({
    selectId: model => model.id,
    sortComparer: (a: Role, b: Role): number =>
      b.startDate.toString().localeCompare(a.startDate.toString())
  });

export interface State extends EntityState<Role> {
  hasLoaded?: boolean;
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    hasLoaded: false,
    isLoading: false,
    error: null
  }
);
