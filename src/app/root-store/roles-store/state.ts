import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as moment from 'moment';

import { Role } from '../../models';

export const featureAdapter:
  EntityAdapter<Role> = createEntityAdapter<Role>({
    selectId: model => model.id,
    sortComparer: (a: Role, b: Role): number => {
      return moment(b.startDate).isAfter(a.startDate) ? 1 : -1;
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
