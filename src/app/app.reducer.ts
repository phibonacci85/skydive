import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCore from './core/core.reducer';

export interface State {
  core: fromCore.State;
}

export const reducers: ActionReducerMap<State> = {
  core: fromCore.coreReducer,
};

export const getCoreState = createFeatureSelector<fromCore.State>('core');
export const getIsSidenavOpen = createSelector(getCoreState, fromCore.getIsSidenavOpen);
