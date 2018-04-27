import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register-theme.scss', './register.component.scss']
})
export class RegisterComponent implements OnInit {
  maxDate;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    // this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log(form);
    // this.authService.registerUser({
    //   email: form.value.email,
    //   password: form.value.password,
    // });
  }
}
