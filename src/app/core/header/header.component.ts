import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as Core from '../core.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {}

  onOpenSidenav() {
    this.store.dispatch(new Core.SetSidenavOpen());
  }

}
