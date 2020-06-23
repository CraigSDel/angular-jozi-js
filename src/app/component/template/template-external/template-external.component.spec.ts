import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExternalComponent } from './template-external.component';

describe('TemplateExternalComponent', () => {
  let component: TemplateExternalComponent;
  let fixture: ComponentFixture<TemplateExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
