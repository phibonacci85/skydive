import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

import * as fromRoot from '../../app.reducer';
import * as AuthActions from '../auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register-theme.scss',
    './register.component.scss',
  ],
})
export class RegisterComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsAuthLoading);
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(new AuthActions.Register({
      username: form.value.email,
      password: form.value.password,
    }));
  }
}
