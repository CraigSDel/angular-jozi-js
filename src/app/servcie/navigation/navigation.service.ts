import {Injectable} from '@angular/core';
import {RoutingLink} from '../../model/routing-link';
import {PropertyBindingComponent} from '../../component/property-binding/property-binding.component';
import {EventBindingComponent} from '../../component/event-binding/event-binding.component';
import {TemplateInternalComponent} from '../../component/template/template-internal/template-internal.component';
import {TemplateExternalComponent} from '../../component/template/template-external/template-external.component';
import {Route, ROUTES, Routes} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() {
  }

  private _ROUTING_LINKS: RoutingLink[] = [
    new RoutingLink('property-binding', 'Property Binding', PropertyBindingComponent),
    new RoutingLink('event-binding', 'Event Binding', EventBindingComponent),
    new RoutingLink('template-internal', 'Template internal', TemplateInternalComponent),
    new RoutingLink('template-external', 'Template External', TemplateExternalComponent)
  ];

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
