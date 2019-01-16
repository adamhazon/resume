import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Role } from '../../models';

export const featureAdapter:
  EntityAdapter<Role> = createEntityAdapter<Role>({
    selectId: model => model.id,
    sortComparer: (a: Role, b: Role): number => {
      return +b.startDate - +a.startDate;
    }
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
