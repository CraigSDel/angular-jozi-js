import {NgModule, OnInit} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavigationService} from "./servcie/navigation/navigation.service";

let routes: Routes = getRoutes();

function getRoutes() {
  let navigationService = new NavigationService();
  return navigationService.getRoutes();
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor() {
  }
}
