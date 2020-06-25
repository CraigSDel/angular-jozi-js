import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon/icon-module';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule]
})
export class AngularMaterialModule {
}
