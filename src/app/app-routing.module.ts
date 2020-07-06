import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavigationService} from './service/navigation/navigation.service';

const routes: Routes = getRoutes();

function getRoutes() {
  const navigationService = new NavigationService();
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
