import { localStorageSync } from 'ngrx-store-localstorage';
import { ActionReducerMap, ActionReducer } from '@ngrx/store';

import * as fromUsersList from './users-list.reducer';

export const rootReducer = {};

export interface AppState {
    usersList: fromUsersList.UsersListState;
};

export const reducers: ActionReducerMap<AppState, any> = {
  usersList: fromUsersList.reducer
};

export function localStorageSyncReducer(
  reducers: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      'usersList'
    ],
    rehydrate: true
  })(reducers);
}

export const metaReducers = [localStorageSyncReducer];
