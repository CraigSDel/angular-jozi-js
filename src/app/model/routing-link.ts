import {Type} from "@angular/core";

export class RoutingLink {

  private _url: string;
  private _routingName: string;
  private _component: Type<any>;

  constructor(url?: string, routingName?: string, component?: Type<any>) {
    this._url = url;
    this._routingName = routingName;
    this._component = component;
  }

  get component(): Type<any> {
    return this._component;
  }

  get url(): string {
    return this._url;
  }

  get routingName(): string {
    return this._routingName;
  }
}
