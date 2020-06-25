import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {TemplateInternalComponent} from './component/template/template-internal/template-internal.component';
import {TemplateExternalComponent} from './component/template/template-external/template-external.component';
import {TemplateImageComponent} from './component/template/template-image/template-image.component';
import {PropertyBindingComponent} from './component/property-binding/property-binding.component';
import {NavigationComponent} from './component/navigation/navigation.component';
import {EventBindingComponent} from './component/event-binding/event-binding.component';
import {AngularMaterialModule} from './module/angular-material/angular-material.module';
import { DirectivesComponent } from './component/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    NavigationComponent,
    EventBindingComponent,
    TemplateInternalComponent,
    TemplateExternalComponent,
    TemplateImageComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
