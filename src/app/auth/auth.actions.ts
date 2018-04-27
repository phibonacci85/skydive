import { Action } from '@ngrx/store';

export const REGISTER = '[Auth] Register';
export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const SET_TOKEN = '[Auth] Set Token';
export const SET_AUTHENTICATED = '[Auth] Set Authenticated';
export const SET_LOADING = '[Auth] Set Loading';

export class Register implements Action {
  readonly type = REGISTER;

  constructor(public payload: { username: string, password: string }) {}
}

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: { username: string, password: string }) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload = null) {}
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export class SetAuthenticated implements Action {
  readonly type = SET_AUTHENTICATED;

  constructor(public payload: boolean) {}
}

export class SetLoading implements Action {
  readonly type = SET_LOADING;

  constructor(public payload: boolean) {}
}

export type AuthActions = Register | Login | Logout | SetToken | SetAuthenticated | SetLoading;
