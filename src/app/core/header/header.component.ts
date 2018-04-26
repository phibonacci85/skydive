import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import * as fromRoot from '../../app.reducer';
import * as Core from '../core.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor (private store: Store<fromRoot.State>) { }

  ngOnInit () {}

  onOpenSidenav () {
    this.store.dispatch(new Core.SetSidenavOpen());
  }

}
