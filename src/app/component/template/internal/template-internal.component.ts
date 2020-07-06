import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-internal-template',
  template: '<h1 class="mat-h1 mat-warn">Internal Template</h1>',
  styles: ['']
})
export class TemplateInternalComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
