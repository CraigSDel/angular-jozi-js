import {Type} from '@angular/core';

export class RoutingLink {

  private readonly _URL: string;
  private readonly _ROUTING_NAME: string;
  private readonly _COMPONENT: Type<any>;

  constructor(url?: string, routingName?: string, component?: Type<any>) {
    this._URL = url;
    this._ROUTING_NAME = routingName;
    this._COMPONENT = component;
  }

  get COMPONENT(): Type<any> {
    return this._COMPONENT;
  }

  get URL(): string {
    return this._URL;
  }

  get ROUTING_NAME(): string {
    return this._ROUTING_NAME;
  }
}
