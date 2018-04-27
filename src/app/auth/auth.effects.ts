import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AngularFireAuth } from 'angularfire2/auth';

import * as AuthActions from './auth.actions';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private afAuth: AngularFireAuth,
  ) {}

  @Effect()
  authRegister = this.actions$.ofType(AuthActions.REGISTER)
    .map((action: AuthActions.Register) => {
      return action.payload;
    })
    .switchMap((authData: { username: string, password: string }) => {
      return fromPromise(
        this.afAuth.auth.createUserWithEmailAndPassword(authData.username,
          authData.password));
    })
    .switchMap(() => {
      return fromPromise(this.afAuth.auth.currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      this.router.navigate(['/manifest']).catch(error => console.log(error));
      return [
        {
          type: AuthActions.SET_AUTHENTICATED,
          payload: true,
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token,
        },
        {
          type: AuthActions.SET_LOADING,
          payload: false,
        },
      ];
    });

  @Effect()
  authLogin = this.actions$.ofType(AuthActions.LOGIN)
    .map((action: AuthActions.Login) => {
      return action.payload;
    })
    .switchMap((authData: { username: string, password: string }) => {
      return fromPromise(
        this.afAuth.auth.signInWithEmailAndPassword(authData.username,
          authData.password));
    })
    .switchMap(() => {
      return fromPromise(this.afAuth.auth.currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      this.router.navigate(['/']).catch(error => console.log(error));
      return [
        {
          type: AuthActions.SET_AUTHENTICATED,
          payload: true,
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token,
        },
        {
          type: AuthActions.SET_LOADING,
          payload: false,
        },
      ];
    });

  @Effect({dispatch: false})
  authLogout = this.actions$.ofType(AuthActions.LOGOUT).do(() => {
    this.router.navigate(['/']).catch(error => console.log(error));
  });
}
