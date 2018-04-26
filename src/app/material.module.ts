import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule, MatListModule, MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class MaterialModule {}
