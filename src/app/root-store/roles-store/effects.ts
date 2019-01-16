import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap, filter, withLatestFrom } from 'rxjs/operators';

import { RolesService } from '../../services/roles.service';
import * as featureActions from './actions';
import * as RolesStoreSelectors from './selectors';

import { RootStoreState } from '../../root-store';

@Injectable()
export class RolesStoreEffects {

  constructor(
    private rolesService: RolesService,
    private actions$: Actions,
    private store$: Store<RootStoreState.State>,
  ) {}

  // Handle a request for loading all roles
  @Effect()
  loadRolesEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    withLatestFrom(this.store$.select(RolesStoreSelectors.selectRolesState)),
    filter(([ action, state ]) => !state.hasLoaded),
    switchMap(data => this.rolesService.getRoles().pipe(
      map(items =>
        new featureActions.LoadSuccessAction({ items })
      ),
      catchError(error =>
        observableOf(new featureActions.LoadFailureAction({ error }))
      )
    ))
  );

  // Handle a request for loading one role
  @Effect()
  loadRoleEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadOneRequestAction>(
      featureActions.ActionTypes.LOAD_ONE_REQUEST
    ),
    withLatestFrom(this.store$.select(RolesStoreSelectors.selectRolesState)),
    filter(([ action, state ]) => !state.hasLoaded),
    switchMap(data => this.rolesService.getRoleById(data[0].payload).pipe(
      map(item =>
        new featureActions.LoadOneSuccessAction({ item })
      ),
      catchError(error =>
        observableOf(new featureActions.LoadFailureAction({ error }))
      )
    ))
  );

  // Handle a request for updating a role
  @Effect()
  updateRoleEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.UpdateRequestAction>(
      featureActions.ActionTypes.UPDATE_REQUEST
    ),
    switchMap(action => this.rolesService.updateRole(action.payload).pipe(
      map(item =>
        new featureActions.UpdateSuccessAction({
          id: item.id,
          changes: item
        })
      ),
      catchError(error =>
        observableOf(new featureActions.LoadFailureAction({ error }))
      )
    ))
  );

  // Handle a request for creating a new role
  @Effect()
  createRoleEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.CreateRequestAction>(
      featureActions.ActionTypes.CREATE_REQUEST
    ),
    switchMap(action => this.rolesService.createRole(action.payload).pipe(
      map(item =>
        new featureActions.CreateSuccessAction(item)
      ),
      catchError(error =>
        observableOf(new featureActions.LoadFailureAction({ error }))
      )
    ))
  );

  // Handle a request for deleting a role
  @Effect()
  deleteRoleEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.DeleteRequestAction>(
      featureActions.ActionTypes.DELETE_REQUEST
    ),
    switchMap(action => this.rolesService.deleteRole(action.payload).pipe(
      map(id =>
        new featureActions.DeleteSuccessAction(id)
      ),
      catchError(error =>
        observableOf(new featureActions.LoadFailureAction({ error }))
      )
    ))
  );
}
