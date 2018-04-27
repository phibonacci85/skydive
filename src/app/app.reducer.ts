import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromCore from './core/core.reducer';
import * as fromAuth from './auth/auth.reducer';

export interface State {
  auth: fromAuth.State;
  core: fromCore.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.authReducer,
  core: fromCore.coreReducer,
};

export const getCoreState = createFeatureSelector<fromCore.State>('core');
export const getIsSidenavOpen = createSelector(getCoreState,
  fromCore.getIsSidenavOpen);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);
export const getAuthToken = createSelector(getAuthState, fromAuth.getAuthToken);
export const getIsAuthLoading = createSelector(getAuthState, fromAuth.getIsLoading);
