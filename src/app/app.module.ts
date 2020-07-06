import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {TemplateInternalComponent} from './component/template/internal/template-internal.component';
import {TemplateExternalComponent} from './component/template/external/template-external.component';
import {TemplateHeadingComponent} from './component/template/heading/template-heading.component';
import {PropertyBindingComponent} from './component/property-binding/property-binding.component';
import {NavigationComponent} from './component/navigation/navigation.component';
import {EventBindingComponent} from './component/event-binding/event-binding.component';
import {CustomAngularMaterialModule} from './module/custom-angular-material/custom-angular-material.module';
import {DirectivesComponent} from './component/directives/directives.component';
import { HighlightDirective } from './component/directives/highlight/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    NavigationComponent,
    EventBindingComponent,
    TemplateInternalComponent,
    TemplateExternalComponent,
    TemplateHeadingComponent,
    DirectivesComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    CustomAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
