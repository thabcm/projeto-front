import {
    UsersListActionTypes,
    UsersListActionsUnion
  } from '../actions/users-list.actions';

  export interface UsersListState {};

  const initialState: UsersListState = {};
  
  export function reducer(state: UsersListState = initialState, action: UsersListActionsUnion): UsersListState {
    switch (action.type) {
      case UsersListActionTypes.SetUsersList:
        return action.payload;

      default:
        return state;
    }
  }
  