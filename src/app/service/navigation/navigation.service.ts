import {Injectable} from '@angular/core';
import {RoutingLink} from '../../model/routing-link';
import {PropertyBindingComponent} from '../../component/property-binding/property-binding.component';
import {EventBindingComponent} from '../../component/event-binding/event-binding.component';
import {TemplateInternalComponent} from '../../component/template/internal/template-internal.component';
import {TemplateExternalComponent} from '../../component/template/external/template-external.component';
import {Route, Routes} from '@angular/router';
import {DirectivesComponent} from '../../component/directives/directives.component';
import {ModuleGreetingComponent} from '../../component/module-greeting/module-greeting.component';
import {DataBindingComponent} from '../../component/data-binding/data-binding.component';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _ROUTING_LINKS: RoutingLink[] = [
    new RoutingLink('directives', 'Directives', DirectivesComponent),
    new RoutingLink('property-binding', 'Property Binding', PropertyBindingComponent),
    new RoutingLink('event-binding', 'Event Binding', EventBindingComponent),
    new RoutingLink('template-internal', 'Template Internal', TemplateInternalComponent),
    new RoutingLink('template-external', 'Template External', TemplateExternalComponent),
    new RoutingLink('module', 'Module', ModuleGreetingComponent),
    new RoutingLink('data-binding', 'Data Binding', DataBindingComponent)
  ];

  constructor() {
  }

  public routingLinks(): RoutingLink[] {
    return this._ROUTING_LINKS;
  }

  public getRoutes(): Route[] {
    const routes: Routes = [];
    this.routingLinks().forEach(value => {
      return routes.push({path: value.URL, component: value.COMPONENT});
    });
    return routes;
  }
}
