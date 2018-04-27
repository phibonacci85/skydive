import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as Core from '../core.actions';
import * as AuthActions from '../../auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() authenticated = false;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {}

  onOpenSidenav() {
    this.store.dispatch(new Core.SetSidenavOpen());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

}
