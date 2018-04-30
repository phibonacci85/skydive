import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

import * as fromRoot from '../../app.reducer';
import * as AuthActions from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.theme.scss',
    './login.component.scss',
  ],
})
export class LoginComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsAuthLoading);
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(new AuthActions.Login({
      username: form.value.email,
      password: form.value.password,
    }));
  }

}
