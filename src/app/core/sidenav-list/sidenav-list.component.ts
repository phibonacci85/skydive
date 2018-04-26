import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import * as fromRoot from '../../app.reducer';
import * as Core from '../core.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() { }

  onCloseSidenav() {
    this.store.dispatch(new Core.SetSidenavClosed());
  }
}
