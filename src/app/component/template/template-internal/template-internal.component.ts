import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-internal-template',
  template: '<h1>Hello from internal template</h1>',
  styles: ['h1{color: blue}']
})
export class TemplateInternalComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
