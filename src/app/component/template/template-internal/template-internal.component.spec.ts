import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInternalComponent } from './template-internal.component';

describe('TemplateComponent', () => {
  let component: TemplateInternalComponent;
  let fixture: ComponentFixture<TemplateInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
