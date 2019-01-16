import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Role } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Roles] Load Request',
  LOAD_FAILURE = '[Roles] Load Failure',
  LOAD_SUCCESS = '[Roles] Load Success',
  LOAD_ONE_REQUEST = '[Role] Load Request',
  LOAD_ONE_SUCCESS = '[Role] Added',
  UPDATE_REQUEST = '[Role] Update Request',
  UPDATE_SUCCESS = '[Role] Update Success',
  CREATE_REQUEST = '[Role] Create Request',
  CREATE_SUCCESS = '[Role] Create Success',
  DELETE_REQUEST = '[Role] Delete Request',
  DELETE_SUCCESS = '[Role] Delete Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Role[] }) {}
}

export class LoadOneRequestAction implements Action {
  readonly type = ActionTypes.LOAD_ONE_REQUEST;
  constructor(public payload: number) {}
}

export class LoadOneSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_ONE_SUCCESS;
  constructor(public payload: { item: Role }) {}
}

export class UpdateRequestAction implements Action {
  readonly type = ActionTypes.UPDATE_REQUEST;
  constructor(public payload: Role) {}
}

export class UpdateSuccessAction implements Action {
  readonly type = ActionTypes.UPDATE_SUCCESS;
  constructor(public payload: Update<Role>) {}
}

export class CreateRequestAction implements Action {
  readonly type = ActionTypes.CREATE_REQUEST;
  constructor(public payload: Role) {}
}

export class CreateSuccessAction implements Action {
  readonly type = ActionTypes.CREATE_SUCCESS;
  constructor(public payload: Role) {}
}

export class DeleteRequestAction implements Action {
  readonly type = ActionTypes.DELETE_REQUEST;
  constructor(public payload: number) {}
}

export class DeleteSuccessAction implements Action {
  readonly type = ActionTypes.DELETE_SUCCESS;
  constructor(public payload: number) {}
}

export type Actions =
  LoadRequestAction |
  LoadFailureAction |
  LoadSuccessAction |
  LoadOneRequestAction |
  LoadOneSuccessAction |
  UpdateRequestAction |
  UpdateSuccessAction |
  CreateRequestAction |
  CreateSuccessAction |
  DeleteRequestAction |
  DeleteSuccessAction;
