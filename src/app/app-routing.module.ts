import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PropertyBindingComponent} from "./property-binding/property-binding.component";


const routes: Routes = [
  {path: 'property-binding', component: PropertyBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
