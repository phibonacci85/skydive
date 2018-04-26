import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private store: Store<fromRoot.State>,
  ) {}

  initAuthListener() {
    // this.afAuth.authState.subscribe(
    //   user => {
    //     if (user) {
    //       this.store.dispatch(new Auth.SetAuthenticated());
    //       this.router.navigate(['/training']);
    //     } else {
    //       this.trainingService.cancelSubscriptions();
    //       this.store.dispatch(new Auth.SetUnathenticated());
    //       this.router.navigate(['/login']);
    //     }
    //   },
    // );
  }

  registerUser(authData: AuthData) {
    // this.store.dispatch(new UI.StartLoading());
    // this.afAuth.auth
    //   .createUserWithEmailAndPassword(
    //     authData.email,
    //     authData.password,
    //   )
    //   .then(result => {
    //     this.store.dispatch(new UI.StopLoading());
    //   })
    //   .catch(error => {
    //     this.store.dispatch(new UI.StopLoading());
    //     this.uiService.showSnackbar(error.message, null, 3000);
    //   });
  }

  login(authData: AuthData) {
    // this.store.dispatch(new UI.StartLoading());
    // this.afAuth.auth
    //   .signInWithEmailAndPassword(
    //     authData.email,
    //     authData.password,
    //   )
    //   .then(result => {
    //     this.store.dispatch(new UI.StopLoading());
    //   })
    //   .catch(error => {
    //     this.store.dispatch(new UI.StopLoading());
    //     this.uiService.showSnackbar(error.message, null, 3000);
    //   });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
