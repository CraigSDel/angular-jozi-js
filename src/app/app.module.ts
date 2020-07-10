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
import {HighlightDirective} from './component/directives/highlight/highlight.directive';
import {GreetingModule} from './module/greeting/greeting.module';
import {ModuleGreetingComponent} from './component/module-greeting/module-greeting.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

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
    HighlightDirective,
    ModuleGreetingComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    CustomAngularMaterialModule,
    GreetingModule,
    MatInputModule,
    FormsModule,
    // Added here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
