import { Action } from '@ngrx/store';

export enum UsersListActionTypes {
  SetUsersList = '[UsersList] Set UsersList'
}

export class SetUsersList implements Action {
  readonly type = UsersListActionTypes.SetUsersList;

  constructor(public payload: any) {}
}

export type UsersListActionsUnion =
  | SetUsersList;
