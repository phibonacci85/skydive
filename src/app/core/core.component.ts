import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import * as Core from './core.actions';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  showSidenav$: Observable<boolean>;

  constructor (private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.select(fromRoot.getIsSidenavOpen);
  }

  onCloseSidenav() {
    this.store.dispatch(new Core.SetSidenavClosed());
  }

  ngOnInit () {}

}
