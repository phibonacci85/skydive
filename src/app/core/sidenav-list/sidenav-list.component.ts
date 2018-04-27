import { Component, Input, OnInit } from '@angular/core';

import * as fromRoot from '../../app.reducer';
import * as Core from '../core.actions';
import * as AuthActions from '../../auth/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent implements OnInit {
  @Input() authenticated = false;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() { }

  onCloseSidenav() {
    this.store.dispatch(new Core.SetSidenavClosed());
  }

  onLogout() {
    this.store.dispatch(new Core.SetSidenavClosed());
    this.store.dispatch(new AuthActions.Logout());
  }
}
